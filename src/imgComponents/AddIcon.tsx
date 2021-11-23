import { useMemo } from "react";

import { SvgProps } from "./";

/**
 * 发现 页面悬浮按钮中的加号
 */
export default function AddIcon({ className, onClick }: SvgProps) {
  return useMemo(
    () => (
      <svg
        className={className}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4267"
        onClick={onClick}
      >
        <path
          d="M185.3952 558.336h665.6a43.52 43.52 0 0 0 0-87.04h-665.6a43.52 43.52 0 1 0 0 87.04z"
          fill="#ffffff"
          p-id="4268"
          className="on-p-fill"
        ></path>
        <path
          d="M474.6752 182.016v665.6a43.52 43.52 0 0 0 87.04 0v-665.6a43.52 43.52 0 1 0-87.04 0z"
          fill="#ffffff"
          p-id="4269"
          className="on-p-fill"
        ></path>
      </svg>
    ),
    []
  );
}
