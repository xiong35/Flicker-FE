import { useMemo } from "react";

import { SvgProps } from "./";

/** 对勾 */
export default function CheckMark({ className, onClick }: SvgProps) {
  return useMemo(
    () => (
      <svg
        className={className}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2610"
        data-spm-anchor-id="a313x.7781069.0.i0"
        onClick={onClick}
      >
        <path
          d="M511.232 981.333333C251.946667 981.333333 42.666667 770.474667 42.666667 512.768 42.666667 255.061333 253.525333 42.666667 511.232 42.666667c106.197333 0 207.701333 34.346667 290.474667 101.546666 20.309333 15.573333 23.466667 45.226667 7.808 65.578667-15.616 20.309333-45.269333 23.424-65.578667 7.808a370.176 370.176 0 0 0-232.704-81.237333c-206.165333 0-374.869333 168.704-374.869333 374.869333 0 206.165333 168.704 374.826667 374.869333 374.826667 206.165333 0 374.826667-168.661333 374.826667-374.826667 0-26.581333-3.114667-53.12-7.808-78.08a48.853333 48.853333 0 0 1 35.925333-56.234667 48.853333 48.853333 0 0 1 56.234667 35.925334c6.229333 31.232 9.386667 64 9.386666 96.853333C981.333333 770.432 770.432 981.333333 511.189333 981.333333z"
          p-id="32051"
        ></path>
        <path
          d="M512.768 703.317333c-12.501333 0-24.96-4.693333-32.768-14.08l-217.130667-220.16a46.634667 46.634667 0 0 1 0-65.621333 46.634667 46.634667 0 0 1 65.621334 0l184.32 185.856 388.864-393.6c18.773333-18.730667 48.426667-18.730667 65.621333 0 18.730667 18.773333 18.730667 48.426667 0 65.621333l-421.717333 426.368c-9.386667 9.386667-20.309333 15.616-32.810667 15.616z"
          p-id="32052"
          data-spm-anchor-id="a313x.7781069.0.i24"
          fill="#1195db"
          className="primary-l-fill"
          opacity="0.4"
        ></path>
      </svg>
    ),
    [onClick]
  );
}
