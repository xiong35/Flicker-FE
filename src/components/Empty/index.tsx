import "./index.scss";

import { useSetup } from "./hooks";

type EmptyProps = {};

function Empty(props: EmptyProps) {
  const {} = props;
  const {} = useSetup();

  return <div className="empty">什么都没有呢</div>;
}

export default Empty;
