import loadable from "@loadable/component";

import { RouteConfig } from "react-router-config";

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: loadable(() => import("../pages/Home")),
    exact: true,
  },
  {
    path: "/login",
    component: loadable(() => import("../pages/Login")),
    exact: true,
  },
  {
    path: "/register",
    component: loadable(() => import("../pages/Register")),
    exact: true,
  },
  {
    path: "/deck/upload",
    component: loadable(() => import("../pages/DeckUpload")),
    exact: true,
    strict: true,
  },
  {
    path: "/deck/edit/:id",
    component: loadable(() => import("../pages/DeckEdit")),
    exact: true,
  },
  {
    path: "/deck/:id",
    component: loadable(() => import("../pages/DeckIntro")),
    exact: true,
    strict: true,
  },
  {
    path: "/deck/:id/:question_id",
    component: loadable(() => import("../pages/DeckQuestion")),
    exact: true,
    strict: true,
  },
  {
    path: "/user",
    component: loadable(() => import("../pages/User")),
    exact: true,
  },
  {
    path: "*",
    component: loadable(() => import("../pages/NotFound")),
    exact: true,
  },
];
