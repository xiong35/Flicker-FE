import "./index.scss";

import { useHistory } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import { useSetup } from "./hooks";
import Logo from "../../imgComponents/Logo";

type RegisterProps = {};

function Register(props: RegisterProps) {
  const {} = props;
  const { doValidate, form, formErrorHint, setForm, register } = useSetup();

  return (
    <div className="register">
      <Logo className="register-logo"></Logo>

      <div className="register-email">
        <TextField
          className="register-input m"
          label="邮箱"
          variant="outlined"
          value={form.email}
          onChange={(e) => setForm({ email: e.target.value })}
          onBlur={() => doValidate("email")}
          helperText={formErrorHint.email}
          error={formErrorHint.email !== undefined}
        />
        <Button
          size="small"
          variant="outlined"
          className="register-email-send_btn m"
        >
          发送验证码
        </Button>
      </div>
      <TextField
        className="register-input m"
        label="验证码"
        variant="outlined"
        value={form.code}
        onBlur={() => doValidate("code")}
        onChange={(e) => setForm({ code: e.target.value })}
        helperText={formErrorHint.code}
        error={formErrorHint.code !== undefined}
      />
      <TextField
        className="register-input m"
        label="用户名"
        variant="outlined"
        value={form.username}
        onChange={(e) => setForm({ username: e.target.value })}
        onBlur={() => doValidate("username")}
        helperText={formErrorHint.username}
        error={formErrorHint.username !== undefined}
      />
      <TextField
        className="register-input m"
        label="密码"
        variant="outlined"
        value={form.password}
        onChange={(e) => setForm({ password: e.target.value })}
        onBlur={() => doValidate("password")}
        helperText={formErrorHint.password}
        error={formErrorHint.password !== undefined}
      />

      <LoadingButton
        onClick={register}
        className="register-register_btn m"
        variant="outlined"
      >
        注册
      </LoadingButton>
    </div>
  );
}

export default Register;
