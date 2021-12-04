import { useMemo } from "react";

import { SvgProps } from "./";

/** DeckUpload 界面向上插入题目的图标 */
export default function Search({ className, onClick }: SvgProps) {
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
          d="M562.8 428.1m-196.1 0a196.1 196.1 0 1 0 392.2 0 196.1 196.1 0 1 0-392.2 0Z"
          fill="#f4ea2a"
          p-id="4030"
          data-spm-anchor-id="a313x.7781069.0.i0"
          className="primary-l-fill"
          opacity=".4"
        ></path>
        <path
          d="M562.6 305.2c-9.9-3.2-20.4 2.2-23.6 12.1-3.2 9.8 2.2 20.4 12.1 23.6C589 353 621.6 378.3 643 412c3.6 5.6 9.6 8.7 15.8 8.7 3.4 0 6.9-0.9 10-2.9 8.7-5.5 11.3-17.1 5.8-25.8-26.1-41.1-65.9-72-112-86.8z"
          fill="#2c2c2c"
          p-id="4031"
          data-spm-anchor-id="a313x.7781069.0.i3"
          className="on-bg-fill"
        ></path>
        <path
          d="M814.8 781.6l-73-73c46.8-55.4 75.1-127 75.1-205 0-175.5-142.8-318.3-318.3-318.3S180.3 328.1 180.3 503.6s142.8 318.3 318.3 318.3c84 0 160.5-32.7 217.4-86.1l72.3 72.3c3.7 3.7 8.4 5.5 13.2 5.5 4.8 0 9.6-1.8 13.2-5.5 7.4-7.3 7.4-19.2 0.1-26.5z m-316.2 2.8c-154.9 0-280.8-126-280.8-280.8s126-280.8 280.8-280.8 280.8 126 280.8 280.8-126 280.8-280.8 280.8z"
          fill="#2c2c2c"
          p-id="4032"
          data-spm-anchor-id="a313x.7781069.0.i2"
          className="on-bg-fill"
        ></path>
      </svg>
    ),
    [onClick]
  );
}
