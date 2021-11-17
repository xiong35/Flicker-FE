import { useMemo } from "react";

import { SvgProps } from "./";

/** 答题界面左右翻动的按钮图标 */
export default function ArrowLeftCircle({ className, onClick }: SvgProps) {
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
          d="M499.2 951.466667c-234.666667 0-426.666667-192-426.666667-426.666667 0-17.066667 0-38.4 4.266667-55.466667 4.266667-12.8 12.8-17.066667 25.6-17.066666 12.8 4.266667 17.066667 12.8 17.066667 25.6-4.266667 12.8-4.266667 29.866667-4.266667 46.933333 0 213.333333 170.666667 384 384 384s384-170.666667 384-384-170.666667-384-384-384c-25.6 0-46.933333 4.266667-72.533333 8.533333-12.8 0-21.333333-4.266667-25.6-17.066666 0-12.8 4.266667-21.333333 17.066666-25.6 25.6-4.266667 51.2-8.533333 81.066667-8.533334 234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667z"
          fill="#e79686"
          p-id="2611"
          data-spm-anchor-id="a313x.7781069.0.i5"
          className="primary-l-fill"
        ></path>
        <path
          d="M119.466667 418.133333h-8.533334c-8.533333-4.266667-17.066667-17.066667-12.8-29.866666 42.666667-119.466667 128-213.333333 238.933334-256 12.8-4.266667 21.333333 0 25.6 12.8 4.266667 12.8 0 21.333333-12.8 25.6C256 213.333333 174.933333 298.666667 140.8 405.333333c-4.266667 8.533333-12.8 12.8-21.333333 12.8z"
          fill="#a39391"
          p-id="2612"
          data-spm-anchor-id="a313x.7781069.0.i1"
          className="secondary-fill"
        ></path>
        <path
          d="M558.933333 691.2c-4.266667 0-12.8 0-17.066666-4.266667l-128-128c-8.533333-8.533333-8.533333-21.333333 0-29.866666s21.333333-8.533333 29.866666 0l128 128c8.533333 8.533333 8.533333 21.333333 0 29.866666 0 4.266667-8.533333 4.266667-12.8 4.266667z"
          fill="#a39391"
          p-id="2613"
          data-spm-anchor-id="a313x.7781069.0.i2"
          className="secondary-fill"
        ></path>
        <path
          d="M435.2 558.933333c-4.266667 0-12.8 0-17.066667-4.266666-8.533333-8.533333-8.533333-21.333333 0-29.866667l128-128c8.533333-8.533333 21.333333-8.533333 29.866667 0s8.533333 21.333333 0 29.866667l-128 128c0 4.266667-8.533333 4.266667-12.8 4.266666z"
          fill="#a39391"
          p-id="2614"
          data-spm-anchor-id="a313x.7781069.0.i3"
          className="secondary-fill"
        ></path>
      </svg>
    ),
    []
  );
}
