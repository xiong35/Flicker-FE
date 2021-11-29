import "./index.scss";

import { useSetup } from "./hooks";
import { CompProps } from "../../hooks/useQuestionComp";

function FillIn(props: CompProps) {
  const {} = props;
  const {} = useSetup();

  return <div className="fill_in">FillIn</div>;
}

export default FillIn;
