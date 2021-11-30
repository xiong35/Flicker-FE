import { useEffect, useState } from "react";

export function useComments() {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    if (!isUp) return;

    const setDown = () => setIsUp(false);
    document.addEventListener("click", setDown, { once: true });
    return () => document.removeEventListener("click", setDown);
  }, [isUp]);

  return { isUp, setIsUp };
}
