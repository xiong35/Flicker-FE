import { useMemo } from "react";

import { SvgProps } from "./";

/** deck upload 界面 删除问题 */
export default function Like({ className, onClick }: SvgProps) {
  return useMemo(
    () => (
      <svg
        className={className}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="9776"
        width="200"
        height="200"
      >
        <path
          d="M466.88 908.96L113.824 563.296a270.08 270.08 0 0 1 0-387.392c108.8-106.56 284.896-106.56 393.696 0 1.504 1.472 2.976 2.944 4.448 4.48 1.472-1.536 2.944-3.008 4.448-4.48 108.8-106.56 284.896-106.56 393.696 0a269.952 269.952 0 0 1 34.016 347.072l-387.392 385.6a64 64 0 0 1-89.92 0.384z"
          p-id="9777"
          fill="#ffffff"
        ></path>
      </svg>
    ),
    [onClick]
  );
}
