import { useContext } from "react";

import { SelfCtx } from "./ctx";

export function useSelf() {
  const { self, setSelf } = useContext(SelfCtx);

  return { self, setSelf };
}
