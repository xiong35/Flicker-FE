import "./index.scss";

import { useSetup } from "./hooks";

type LoadingProps = {};

function Loading(props: LoadingProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="loading">
      <div className="loading-container">
        <div className="loading-container-item"></div>
        <div className="loading-container-item"></div>
        <div className="loading-container-item"></div>
        <div className="loading-container-item"></div>
      </div>
    </div>
  );
}

export default Loading;
