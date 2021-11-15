import "./index.scss";

import { useHistory } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useSetup } from "./hooks";
import Logo from "../../imgComponents/Logo";
import logoImg from "../../../public/logo.svg";

type LoginProps = {};

function Login(props: LoginProps) {
  const {} = props;
  const {} = useSetup();

  const history = useHistory();

  return (
    <div className="login">
      <Logo className="login-logo"></Logo>

      <TextField
        className="login-input m login-email"
        label="邮箱"
        variant="outlined"
      />
      <TextField
        className="login-input m login-password"
        label="密码"
        variant="outlined"
      />

      <Button
        onClick={() => {
          history.push("/");
        }}
        className="login-login_btn m"
        variant="outlined"
      >
        登录
      </Button>
    </div>
  );
}

export default Login;
