
import "./index.scss";

import { useSetup } from "./hooks";


type NotFoundProps = {
  
};

function NotFound(props: NotFoundProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="not-found">
      NotFound
    </div>
  );
}

export default NotFound;
