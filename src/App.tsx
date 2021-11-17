import "./App.scss";

import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { routes } from "./routes";
import { getUserReq } from "./network/user/getUser";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    const user = getUserReq();
  }, [location]);

  return (
    <div className="main">
      <Switch>
        <Redirect to="/home" path="/" exact></Redirect>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}
