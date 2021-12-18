import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { showToast } from "../utils/showToast";
import { getToken } from "../utils/token";

// import { nanoid } from "@reduxjs/toolkit";

// import { store } from "../../redux/store";
// import { addToast, removeToast } from "../../redux/toasts/toastsSlice";
// import { responseType } from "./responseType";

const SERVER_BASE_URL = import.meta.env.VITE_BE_URL as string;

/** 根据哈希值判断有无重复发起的请求 */
const sendingRequest = new Set<string>();

/**
 * 失败会返回200以外的http状态码
 */
type HttpRes<T> = {
  success: boolean;
  /**
   * 错误提示信息, 出现错误时直接使用即可
   */
  message: string;
  error?: string;
  data: T;
};

const DEFAULT_ERR_MSG = "出错了！";

export default async function _request<T = {}>(
  config: AxiosRequestConfig,
  shouldShowHint = true
): Promise<T | null> {
  const hashedReq = JSON.stringify({
    u: config.url,
    d: config.data,
    p: config.params,
  });
  if (sendingRequest.has(hashedReq)) return null;
  sendingRequest.add(hashedReq);

  const instance = axios.create({
    baseURL: SERVER_BASE_URL,
    timeout: 60000,
    // withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
      config.headers = config.headers || {};
      config.headers.Authorization = "Bearer " + (token?.value ?? "");
      return config;
    },
    (err) => {
      console.error(err);
    }
  );

  return new Promise<T | null>(async (resolve) => {
    try {
      const res = await instance.request<HttpRes<T>>(config);
      if (res.status === 200 && res.data && res.data.success) {
        resolve(res.data.data);
      } else if (!res.data) {
        throw DEFAULT_ERR_MSG;
      } else {
        console.log(res.data);
        throw res.data.message || DEFAULT_ERR_MSG;
      }
    } catch (err) {
      console.error("in request: ", { config, err });

      let errMsg = DEFAULT_ERR_MSG;
      if (typeof err === "string") {
        errMsg = err;
      } else if ((err as AxiosError).isAxiosError) {
        const axiosErr = err as AxiosError<HttpRes<T>>;
        if (axiosErr.response) {
          errMsg = axiosErr.response.data.message;
        }
      } else if (err instanceof Error) {
        errMsg = err.message;
      }

      console.log({ errMsg });
      shouldShowHint && showToast(errMsg, "error");

      resolve(null);
    } finally {
      setTimeout(() => {
        sendingRequest.delete(hashedReq);
      }, 70);
    }
  });
}
