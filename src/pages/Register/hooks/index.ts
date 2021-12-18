import { useHistory } from "react-router-dom";

import { useForm } from "../../../hooks/useForm";
import { loginReq } from "../../../network/user/login";
import { registerReq } from "../../../network/user/register";
import { sendCodeReq } from "../../../network/user/sendCode";
import { showToast } from "../../../utils/showToast";
import { setToken } from "../../../utils/token";
import {
    emailValidator, passwordValidator, userNameValidator, validateCodeValidator
} from "../../../utils/validators";
import { useSendCode } from "./useSendCode";

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
    const token = await loginReq({ mail: form.mail, password: form.password });
    if (token) {
      setToken({ value: token });
      history.push("/");
    }
    showToast("自动登录失败，请手动登录", "error");
    history.push("/login");
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
