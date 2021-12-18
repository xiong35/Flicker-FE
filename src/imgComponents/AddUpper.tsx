import { useMemo } from "react";

import { SvgProps } from "./";

/** DeckUpload 界面向上插入题目的图标 */
export default function AddUpper({ className, onClick }: SvgProps) {
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
          className="on-bg-l-fill"
          d="M460.8 768H256V460.8H204.8v358.4h256v102.4h460.8v-256H460.8v102.4zM460.8 102.4v256h460.8V102.4H460.8z m409.6 204.8h-358.4V153.6h358.4v153.6zM204.8 358.4h51.2V256h102.4V204.8H256V102.4H204.8v102.4H102.4v51.2h102.4v102.4z"
          p-id="11421"
        ></path>
      </svg>
    ),
    [onClick]
  );
}
