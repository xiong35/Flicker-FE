import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routes } from "./routes";

export default function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
