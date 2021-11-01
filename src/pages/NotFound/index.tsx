import "./index.scss";

import { useSetup } from "./hooks";

type NotFoundProps = {};

function NotFound(props: NotFoundProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="not-found">
      <h1>Error 404</h1>
    </div>
  );
}

export default NotFound;
