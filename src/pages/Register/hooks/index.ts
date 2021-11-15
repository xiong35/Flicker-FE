import { useHistory } from "react-router-dom";

import {
    emailValidator, passwordValidator, userNameValidator, validateCodeValidator
} from "../../../utils/validators";
import { useForm } from "../../../hooks/useForm";

export function useSetup() {
  const history = useHistory();
  const { doValidate, form, formErrorHint, setForm } = useForm({
    email: {
      validator: emailValidator,
    },
    code: {
      validator: validateCodeValidator,
    },
    username: {
      validator: userNameValidator,
    },
    password: {
      validator: passwordValidator,
    },
  });

  async function register() {
    const passValidation = await doValidate();
    if (!passValidation) return;

    history.push("/");
  }

  return { doValidate, form, formErrorHint, setForm, register };
}
