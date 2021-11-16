
import "./index.scss";

import { useSetup } from "./hooks";


type LoadingProps = {
  
};

function Loading(props: LoadingProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="loading">
      Loading
    </div>
  );
}

export default Loading;
