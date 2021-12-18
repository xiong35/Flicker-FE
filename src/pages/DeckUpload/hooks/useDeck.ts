import { useEffect, useState } from "react";

import { useForm } from "../../../hooks/useForm";
import { Deck } from "../../../models/deck";
import { createCardsetReq } from "../../../network/cardset/createCardset";
import { updateCardsetReq } from "../../../network/cardset/updateCardset";
import { getDeckByIdReq } from "../../../network/deck/getDeckById";
import { showToast } from "../../../utils/showToast";
import { deckDescriptionValidator, deckNameValidator } from "../../../utils/validators";

export const DECK_KEY = "flicker-deck";

export const useDeck = (id: string | undefined) => {
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
    id &&
      window.localStorage.setItem(
        DECK_KEY,
        JSON.stringify({ ...form, ...partOfForm })
      );
    setForm(partOfForm);
  };

  const onDeckInputBlur = async (key: keyof Form) => {
    const useable = await doValidate(key);
    if (useable && id) updateDeck();
  };

  const updateDeck = async () => {
    if (!id) return;
    updateCardsetReq({ ...form, access: form.access === "0" ? 0 : 1 }, { id });
  };

  return {
    form,
    setForm,
    setFormAndWriteToLocal,
    formErrorHint,
    onDeckInputBlur,
    clearError,
    createDeck,
    showDeckProgress,
  };
};
