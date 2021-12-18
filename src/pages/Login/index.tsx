import "./index.scss";

import { useHistory } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import logoImg from "../../../public/logo.svg";
import Logo from "../../imgComponents/Logo";
import { showToast } from "../../utils/showToast";
import { useSetup } from "./hooks";

type LoginProps = {};

function Login(props: LoginProps) {
  const {
    clearError,
    doValidate,
    form,
    formErrorHint,
    setForm,
    login,
    history,
  } = useSetup();

  return (
    <div className="login">
      <Logo className="login-logo"></Logo>

      <TextField
        className="login-input m login-email reset_mui_input_primary"
        label="邮箱"
        variant="outlined"
        value={form.mail}
        onChange={(e) => setForm({ mail: e.target.value })}
        onBlur={() => doValidate("mail")}
        helperText={formErrorHint.mail}
        error={formErrorHint.mail !== undefined}
        onFocus={() => clearError("mail")}
      />
      <TextField
        className="login-input m login-password reset_mui_input_primary"
        label="密码"
        variant="outlined"
        value={form.password}
        onChange={(e) => setForm({ password: e.target.value })}
        onBlur={() => doValidate("password")}
        helperText={formErrorHint.password}
        error={formErrorHint.password !== undefined}
        onFocus={() => clearError("password")}
        type="password"
      />

      <div className="login-actions">
        <div
          className="login-actions-item"
          onClick={() => showToast("敬请期待", "warning")}
        >
          找回密码
        </div>
        <div
          className="login-actions-item"
          onClick={() => history.push("/register")}
        >
          注册
        </div>
      </div>

      <Button
        onClick={login}
        className="login-login_btn m reset_mui_button_contained_primary"
        variant="contained"
      >
        登录
      </Button>
    </div>
  );
}

export default Login;
