import { useLocation } from "react-router-dom";
import { useState } from "react";

type ActivePagePath = "/home" | "/explore" | "/user";

export default function useActivePath() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(
    location.pathname as ActivePagePath
  );

  return { activePath };
}
