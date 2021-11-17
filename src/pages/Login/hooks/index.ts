import { useHistory } from "react-router-dom";

import { emailValidator, passwordValidator } from "../../../utils/validators";
import { setToken } from "../../../utils/token";
import { showToast } from "../../../utils/showToast";
import { loginReq } from "../../../network/user/login";
import { useForm } from "../../../hooks/useForm";

export function useSetup() {
  const history = useHistory();

  const { clearError, doValidate, form, formErrorHint, setForm } = useForm({
    mail: {
      validator: emailValidator,
    },
    password: {
      validator: passwordValidator,
    },
  });

  async function login() {
    if (!(await doValidate())) return;

    const token = await loginReq(form);
    if (!token) return;

    showToast("登录成功！", "success");

    history.push("/");
    setToken({ value: token });
  }

  return {
    clearError,
    doValidate,
    form,
    formErrorHint,
    setForm,
    login,
    history,
  };
}
