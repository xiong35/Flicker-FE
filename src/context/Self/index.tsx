import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { SelfCtx } from "./ctx";
import { getUserReq } from "../../network/user/getUser";
import { DEFAULT_USER } from "../../models/user";

export default function SelfHOC(props: { children: JSX.Element }) {
  const location = useLocation();
  const [self, setSelf] = useState(DEFAULT_USER);
  useEffect(() => {
    getUserReq().then((user) => {
      user && setSelf(user);
    });
  }, [location]);

  return (
    <SelfCtx.Provider value={{ self, setSelf }}>
      {props.children}
    </SelfCtx.Provider>
  );
}
