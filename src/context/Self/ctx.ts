import { createContext } from "react";

import { DEFAULT_USER, UserPublic } from "../../models/user";

export const SelfCtx = createContext<{
  self: UserPublic;
  setSelf: (u: UserPublic) => void;
}>({ self: DEFAULT_USER, setSelf: () => {} });
