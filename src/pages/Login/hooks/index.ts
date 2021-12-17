import { useHistory } from "react-router-dom";

import { useForm } from "../../../hooks/useForm";
import { loginReq } from "../../../network/user/login";
import { showToast } from "../../../utils/showToast";
import { setToken } from "../../../utils/token";
import { emailValidator, passwordValidator } from "../../../utils/validators";

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

    setToken({ value: token });
    history.push("/");
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
