import { useMemo } from "react";

import { SvgProps } from "./";

/** deck card 组件的热度 */
export default function Fire({ className, onClick }: SvgProps) {
  return useMemo(
    () => (
      <svg
        className={className}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="24211"
        onClick={onClick}
      >
        <path
          d="M819.413333 585.173333c0-40.96-6.186667-92.8-23.253333-139.946666 0.213333 16 1.493333 30.933333 3.2 42.88-46.72-45.226667-73.386667-107.306667-86.4-178.986667-69.333333 41.173333-65.066667 131.626667-58.88 178.986667-63.146667-61.226667-89.6-153.173333-95.146667-258.133334-80.426667 121.173333-30.72 295.68-19.626666 354.133334-70.613333-41.173333-94.72-192.213333-94.72-192.213334-31.573333 16.426667-55.253333 46.506667-71.04 81.493334 6.186667 47.786667 16.213333 87.893333 20.48 110.72-15.786667-9.173333-29.226667-24.106667-40.533334-41.386667-2.133333 14.08-3.626667 27.946667-3.626666 41.386667 0 146.56 100.053333 269.653333 234.88 302.933333 134.613333-33.066667 234.666667-155.946667 234.666666-301.866667z"
          fill="#549E42"
          opacity=".4"
          p-id="24212"
          data-spm-anchor-id="a313x.7781069.0.i9"
          className="primary-l-fill"
        ></path>
        <path
          d="M559.36 127.573333c-8.106667 146.346667 11.52 280.106667 94.72 360.533334-7.253333-53.973333-11.52-163.84 92.16-193.066667 8.106667 55.893333 17.066667 78.72 30.293333 107.093333 32.213333 55.893333 42.88 129.066667 42.88 183.04 0 171.093333-137.6 311.04-307.413333 311.04S204.586667 756.266667 204.586667 584.106667c0-71.466667 31.36-159.146667 94.72-192.213334 0 0 24.106667 151.04 94.72 192.213334-15.146667-79.36-101.973333-374.186667 165.333333-456.533334m0-42.666666h-1.706667c-4.053333 0.213333-8.106667 0.853333-11.946666 2.133333-158.506667 49.28-208.213333 164.48-217.6 273.493333-2.986667-2.773333-6.186667-4.906667-9.813334-6.826666-5.973333-2.986667-12.586667-4.48-19.2-4.48-6.826667 0-13.44 1.706667-19.626666 4.693333-81.28 42.24-117.76 145.92-117.76 229.973333C161.706667 779.52 318.72 938.666667 511.786667 938.666667S861.866667 779.946667 861.866667 584.96c0-35.84-4.693333-126.933333-47.786667-202.666667-11.306667-24.106667-18.773333-43.093333-26.026667-93.44a42.517333 42.517333 0 0 0-42.24-36.48c-3.84 0-7.68 0.426667-11.52 1.706667-36.266667 10.24-87.253333 36.053333-111.786666 100.48-18.773333-58.026667-25.6-131.84-20.906667-222.506667 0.213333-1.493333 0.213333-2.986667 0.213333-4.48 0-23.466667-18.986667-42.666667-42.453333-42.666666 0.213333 0 0 0 0 0z m0 85.333333z"
          fill="#2c2c2c"
          p-id="24213"
          data-spm-anchor-id="a313x.7781069.0.i8"
          className="on-bg-l-fill"
        ></path>
        <path
          d="M600.96 714.666667c-5.546667 0-10.88-2.133333-15.146667-6.186667-5.12-5.12-123.306667-125.866667-102.186666-328.746667 1.28-11.733333 11.52-20.266667 23.466666-18.986666a21.333333 21.333333 0 0 1 18.986667 23.466666c-18.986667 181.76 88.96 293.12 90.026667 294.186667 8.32 8.32 8.32 21.76 0 30.08-4.266667 4.053333-9.813333 6.186667-15.146667 6.186667z"
          fill="#549E42"
          p-id="24214"
          data-spm-anchor-id="a313x.7781069.0.i11"
          className="primary-l-fill"
        ></path>
      </svg>
    ),
    []
  );
}
