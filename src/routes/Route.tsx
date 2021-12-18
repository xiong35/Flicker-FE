import { Route as Route_, RouteProps } from "react-router-dom";

import { useBeforeEnter } from "../hooks/useBeforeEnter";

export function Route(config: RouteProps) {
  useBeforeEnter();
  return <Route_ {...config}></Route_>;
}
