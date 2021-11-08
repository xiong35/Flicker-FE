import { useMemo } from 'react';

import { SvgProps } from './';

export default function ArrowLeftP({ className, onClick }: SvgProps) {
  return useMemo(
    () => (
      <svg
        className={className}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3320"
        onClick={onClick}
      >
        <path
          d="M716.8 0L204.8 512l512 512 102.4-102.4L409.6 512 819.2 102.4z"
          fill="#e79686"
          p-id="3321"
          data-spm-anchor-id="a313x.7781069.0.i0"
          className="primary-fill"
        ></path>
        <path
          d="M631.466667 290.133333l-102.4-102.4L716.8 0l102.4 102.4-187.733333 187.733333z m0 443.733334L819.2 921.6l-102.4 102.4-187.733333-187.733333 102.4-102.4z"
          fill="#a39391"
          p-id="3322"
          data-spm-anchor-id="a313x.7781069.0.i1"
          className="secondary-fill"
        ></path>
      </svg>
    ),
    []
  );
}
