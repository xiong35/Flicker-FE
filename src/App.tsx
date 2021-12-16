import "./App.scss";

import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Toasts from "./components/Toasts";
import SelfHOC from "./context/Self";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { syncDeckRecords } from "./redux/studyRecord/studySlice";
import { routes } from "./routes";
import { showToast } from "./utils/showToast";
import { getToken } from "./utils/token";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken();

    if (!token) showToast("您还没有登录, 请登录以查看所有功能", "warning");

    dispatch(syncDeckRecords());
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
