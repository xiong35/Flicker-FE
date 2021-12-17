import "./App.scss";

import { Redirect, Switch } from "react-router-dom";

import Toasts from "./components/Toasts";
import SelfHOC from "./context/Self";
import { useBeforeEnter } from "./hooks/useBeforeEnter";
import { routes } from "./routes";
import { Route } from "./routes/Route";

export default function App() {
  useBeforeEnter();

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
