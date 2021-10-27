import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./index.scss";
import { useSetup } from "./hooks";
import logoImg from "../../../public/logo.svg";
import { useHistory } from "react-router-dom";

type LoginProps = {};

function Login(props: LoginProps) {
  const {} = props;
  const {} = useSetup();

  const history = useHistory();

  return (
    <div className="login">
      <img src={logoImg} alt="logoImg" className="login-logo" />

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
