import "./index.scss";

import { useSetup } from "./hooks";

type NoMoreProps = {};

function NoMore(props: NoMoreProps) {
  const {} = props;
  const {} = useSetup();

  return <div className="no_more">没有更多了</div>;
}

export default NoMore;
