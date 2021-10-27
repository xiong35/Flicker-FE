import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { routes } from "./routes";

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route {...route} />
        ))}
      </Switch>
    </Router>
  );
}
