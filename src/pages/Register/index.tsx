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
  const {
    doValidate,
    form,
    formErrorHint,
    setForm,
    register,
    sendCode,
    timeLeft,
    clearError,
  } = useSetup();

  return (
    <div className="register">
      <Logo className="register-logo"></Logo>

      <div className="register-mail">
        <TextField
          className="register-input m"
          label="邮箱"
          variant="outlined"
          value={form.mail}
          onChange={(e) => setForm({ mail: e.target.value })}
          onBlur={() => doValidate("mail")}
          helperText={formErrorHint.mail}
          error={formErrorHint.mail !== undefined}
          onFocus={() => clearError("mail")}
        />
        <Button
          size="small"
          variant="outlined"
          className="register-mail-send_btn m"
          disabled={timeLeft !== 0}
          onClick={sendCode}
        >
          {timeLeft === 0 ? "发送验证码" : `重发(${timeLeft})`}
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
        onFocus={() => clearError("code")}
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
        onFocus={() => clearError("username")}
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
        onFocus={() => clearError("password")}
        type="password"
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
