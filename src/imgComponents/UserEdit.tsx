import { useMemo } from "react";

import { SvgProps } from "./";

/** 用户界面修改用户名的图标 */
export default function UserEdit({ className, onClick }: SvgProps) {
  return useMemo(
    () => (
      <svg
        className={className}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="11420"
        width="200"
        height="200"
        onClick={onClick}
      >
        <path
          d="M736.7 274.9l162.7 162.7L575 762l-176.4 11.3 13.5-173.9z"
          fill="#03BD61"
          p-id="1244"
          className="primary-l-fill"
          opacity=".5"
        ></path>
        <path
          d="M893.7 872.6H130.3c-21.9 0-39.6 17.7-39.6 39.6 0 21.9 17.7 39.6 39.6 39.6h763.4c21.9 0 39.6-17.7 39.6-39.6 0-21.8-17.7-39.6-39.6-39.6zM671 184.2l133.5 133.5L392.3 730 247 739.3l11.1-142.2L671 184.2m0-112L181.4 561.8 161 824.2 427.1 807l489.4-489.4L671 72.2z"
          fill="#23202D"
          p-id="1245"
        ></path>
      </svg>
    ),
    [onClick]
  );
}
