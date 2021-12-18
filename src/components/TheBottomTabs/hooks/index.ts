

import useActivePath from "./useActivePath";

export function useSetup() {
  const { activePath } = useActivePath();

  return { activePath };
}
