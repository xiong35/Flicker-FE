import { useMemo } from "react";

import { SvgProps } from "./";

/**
 * 发现 页面悬浮按钮中的加号
 */
export default function Send({ className, onClick }: SvgProps) {
  return useMemo(
    () => (
      <svg
        className={className}
        onClick={onClick}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="15462"
        width="200"
        height="200"
      >
        <path
          d="M841 310.7L767.5 512l-73.4 201.3-255.7-255.7 201.3-73.5z"
          fill="#FFCE00"
          p-id="15463"
          opacity=".4"
          className="primary-l-fill"
        ></path>
        <path
          d="M566 912.7c-16.5 0-31.8-9.1-39.7-23.8L380.7 616.2 108.1 470.6c-15.7-8.4-24.9-25.1-23.7-42.9s12.8-33 29.5-39.1l687.7-250.9c16.4-6 34.9-1.9 47.2 10.5 12.4 12.4 16.5 30.8 10.5 47.2l-251 687.7c-6.1 16.7-21.4 28.2-39.1 29.5-1 0-2.1 0.1-3.2 0.1z m-326.7-474l195.8 104.6c7.9 4.2 14.3 10.6 18.5 18.5l104.6 195.8 183.3-502.2-502.2 183.3z"
          fill="#242F44"
          p-id="15464"
        ></path>
      </svg>
    ),
    [onClick]
  );
}
