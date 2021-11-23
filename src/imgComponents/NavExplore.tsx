import { useMemo } from "react";

import { SvgProps } from "./";

/** 底部导航栏 发现 界面 icon */
export default function NavExplore({ className, onClick }: SvgProps) {
  return useMemo(
    () => (
      <svg
        className={className}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7074"
        data-spm-anchor-id="a313x.7781069.0.i3"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="200"
        height="200"
        onClick={onClick}
      >
        <path
          d="M512 1024a448 448 0 0 1-103.36-883.84l14.72 62.08a384 384 0 1 0 177.28 0l14.72-62.08A448 448 0 0 1 512 1024z"
          fill="#1c1c1c"
          className="on-bg-l-fill"
          p-id="7075"
        ></path>
        <path
          className="on-bg-l-fill"
          d="M480 0h64v192h-64z"
          fill="#1c1c1c"
          p-id="7076"
        ></path>
        <path
          d="M416 0h192v64h-192zM300.8 786.56l85.12-252.48 60.8 20.16-44.16 130.88 131.2-43.84 20.16 60.8-253.12 84.48zM638.08 617.92l-60.48-20.16 43.84-130.88-131.2 43.84-20.16-60.8 253.12-84.48-85.12 252.48z"
          fill="#e79686"
          p-id="7077"
          data-spm-anchor-id="a313x.7781069.0.i0"
          className="primary-l-fill"
        ></path>
      </svg>
    ),
    []
  );
}
