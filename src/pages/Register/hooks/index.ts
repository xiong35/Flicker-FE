import { useHistory } from "react-router-dom";

import { useSendCode } from "./useSendCode";
import {
    emailValidator, passwordValidator, userNameValidator, validateCodeValidator
} from "../../../utils/validators";
import { showToast } from "../../../utils/showToast";
import { sendCodeReq } from "../../../network/user/sendCode";
import { registerReq } from "../../../network/user/register";
import { useForm } from "../../../hooks/useForm";

export function useSetup() {
  const history = useHistory();

  const { doValidate, form, formErrorHint, setForm, clearError } = useForm({
    mail: {
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
    const success = await registerReq(form);
    if (!success) return;

    showToast("注册成功！", "success");

    history.push("/");
  }

  const { sendCode, timeLeft } = useSendCode(form, doValidate);

  return {
    doValidate,
    form,
    formErrorHint,
    setForm,
    register,
    sendCode,
    timeLeft,
    clearError,
  };
}
