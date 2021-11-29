import { useState } from "react";

import { useForm } from "../../../hooks/useForm";
import { Deck } from "../../../models/deck";
import { createCardsetReq } from "../../../network/cardset/createCardset";
import { showToast } from "../../../utils/showToast";
import { deckDescriptionValidator, deckNameValidator } from "../../../utils/validators";

export const useDeck = () => {
  const { form, setForm, doValidate, formErrorHint, clearError } = useForm({
    name: { validator: deckNameValidator },
    description: { validator: deckDescriptionValidator },
    access: { validator: async () => undefined, default: "0" },
  });

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

  return {
    form,
    setForm,
    formErrorHint,
    doValidate,
    clearError,
    createDeck,
    showDeckProgress,
  };
};
