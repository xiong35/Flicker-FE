import "./App.scss";

import { Redirect, Route, Switch } from "react-router-dom";
import { useEffect } from "react";

import { getToken } from "./utils/token";
import { showToast } from "./utils/showToast";
import { routes } from "./routes";
import SelfHOC from "./context/Self";
import Toasts from "./components/Toasts";

export default function App() {
  useEffect(() => {
    const token = getToken();

    if (!token) showToast("您还没有登录, 请登录以查看所有功能", "warning");
  }, []);

  return (
    <div className="main">
      <SelfHOC>
        <Switch>
          <Redirect to="/home" path="/" exact></Redirect>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </SelfHOC>
      <Toasts />
    </div>
  );
}
