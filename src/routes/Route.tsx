import { RouteConfig } from "react-router-config";
import { Route as Route_ } from "react-router-dom";

import { useBeforeEnter } from "../hooks/useBeforeEnter";

export function Route(config: RouteConfig) {
  useBeforeEnter();
  return <Route_ {...config}></Route_>;
}
