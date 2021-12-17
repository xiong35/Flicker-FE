import { useEffect, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { syncDeckRecords } from "../redux/studyRecord/studySlice";
import { showToast } from "../utils/showToast";
import { getToken } from "../utils/token";
import { useAppDispatch } from "./useAppDispatch";

export function useBeforeEnter() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  console.log("# useBeforeEnter");

  useLayoutEffect(() => {
    const token = getToken();

    if (!token) {
      if (
        history.location.pathname !== "/login" &&
        history.location.pathname !== "/register"
      ) {
        history.push("/login");
        showToast("您还没有登录, 请登录以查看所有功能", "warning");
      }
    }
  }, [history.location]);

  useEffect(() => {
    if (history.location.pathname === "/home") dispatch(syncDeckRecords());
  }, [history.location]);
}
