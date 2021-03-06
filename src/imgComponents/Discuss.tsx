import { useMemo } from "react";

import { SvgProps } from "./";

/** 评论区的图标 */
export default function Discuss({ className, onClick }: SvgProps) {
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
          d="M248.9344 506.88a307.7632 240.0768 0 1 0 615.5264 0 307.7632 240.0768 0 1 0-615.5264 0Z"
          fill="#ffe048"
          p-id="2533"
          className="primary-l-fill"
          opacity="0.4"
        ></path>
        <path
          d="M361.1136 460.6464m-40.4992 0a40.4992 40.4992 0 1 0 80.9984 0 40.4992 40.4992 0 1 0-80.9984 0Z"
          fill="#55524F"
          className="on-bg-fill"
          p-id="2534"
        ></path>
        <path
          d="M521.9328 460.6464m-40.4992 0a40.4992 40.4992 0 1 0 80.9984 0 40.4992 40.4992 0 1 0-80.9984 0Z"
          fill="#55524F"
          className="on-bg-fill"
          p-id="2535"
        ></path>
        <path
          d="M682.7008 460.6464m-40.4992 0a40.4992 40.4992 0 1 0 80.9984 0 40.4992 40.4992 0 1 0-80.9984 0Z"
          fill="#55524F"
          className="on-bg-fill"
          p-id="2536"
        ></path>
        <path
          d="M469.6576 877.2096a20.5312 20.5312 0 0 1-19.7632-15.104c-2.9696-10.9056 3.4816-22.1696 14.3872-25.1392 169.1648-46.08 289.536-125.3888 348.1088-229.376 43.8784-77.8752 38.144-143.36 38.0928-144.0256-0.0512-0.6656-0.1024-1.3824-0.1024-2.048 0-157.2352-154.9312-285.1328-345.344-285.1328S159.6928 304.2816 159.6928 461.4656s154.9312 285.1328 345.344 285.1328c11.3152 0 20.48 9.1648 20.48 20.48s-9.1648 20.48-20.48 20.48c-212.992 0-386.304-146.2784-386.304-326.0928s173.2608-326.0928 386.304-326.0928c212.6336 0 385.6896 145.7664 386.304 325.1712 0.8192 10.3936 4.5056 80.7936-41.7792 164.4544-44.3392 80.2304-145.3056 188.9792-374.528 251.4432-1.792 0.512-3.6352 0.768-5.376 0.768z"
          fill="#55524F"
          className="on-bg-fill"
          p-id="2537"
        ></path>
      </svg>
    ),
    [onClick]
  );
}
