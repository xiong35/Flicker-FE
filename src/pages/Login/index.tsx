import "./index.scss";

import { useHistory } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useSetup } from "./hooks";
import Logo from "../../imgComponents/Logo";
import logoImg from "../../../public/logo.svg";

type LoginProps = {};

function Login(props: LoginProps) {
  const { clearError, doValidate, form, formErrorHint, setForm, login } =
    useSetup();

  return (
    <div className="login">
      <Logo className="login-logo"></Logo>

      <TextField
        className="login-input m login-email"
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
        className="login-input m login-password"
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

      <Button onClick={login} className="login-login_btn m" variant="outlined">
        登录
      </Button>
    </div>
  );
}

export default Login;
