import { useContext } from "react";

import { SelfCtx } from "./ctx";

export function useSelf() {
  const { self, setSelf: _setSelf } = useContext(SelfCtx);

  function setSelf(newSelf: Partial<Parameters<typeof _setSelf>[0]>) {
    _setSelf({ ...self, ...newSelf });
  }

  return { self, setSelf };
}
