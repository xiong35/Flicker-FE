import "./App.scss";

import { Redirect, Route, Switch } from "react-router-dom";

import Toasts from "./components/Toasts";
import SelfHOC from "./context/Self";
import { routes } from "./routes";

export default function App() {
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
