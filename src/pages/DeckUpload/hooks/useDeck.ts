import { useState } from "react";

import { useForm } from "../../../hooks/useForm";
import { Deck } from "../../../models/deck";
import { createCardsetReq } from "../../../network/cardset/createCardset";
import { showToast } from "../../../utils/showToast";
import { deckDescriptionValidator, deckNameValidator } from "../../../utils/validators";

export const DECK_KEY = "flicker-deck";

export const useDeck = () => {
  const { form, setForm, doValidate, formErrorHint, clearError } = useForm({
    name: { validator: deckNameValidator, default: "" },
    description: { validator: deckDescriptionValidator, default: "" },
    access: { validator: async () => undefined, default: "0" },
  });

  type Form = typeof form;

  const [showDeckProgress, setShowDeckProgress] = useState(false);

  const createDeck = async () => {
    const errors = Object.values(formErrorHint);
    for (let i = 0; i < errors.length; i++) {
      if (errors[i]) {
        showToast(errors[i], "error");
        return;
      }
    }
    setShowDeckProgress(true);
    const res = await createCardsetReq({
      ...form,
      access: Number(form.access) as Deck["access"],
    });
    setShowDeckProgress(false);

    return res;
  };

  const setFormAndWriteToLocal = (partOfForm: Partial<Form>) => {
    window.localStorage.setItem(
      DECK_KEY,
      JSON.stringify({ ...form, ...partOfForm })
    );
    setForm(partOfForm);
  };

  return {
    form,
    setForm,
    setFormAndWriteToLocal,
    formErrorHint,
    doValidate,
    clearError,
    createDeck,
    showDeckProgress,
  };
};
