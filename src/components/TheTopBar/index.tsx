import "./index.scss";

import { useSetup } from "./hooks";
import arrowLeftP from "../../assets/img/arrow-left-p.svg";

type TheTopBarProps = {
  title: string;
};

function TheTopBar(props: TheTopBarProps) {
  const { title } = props;
  const {} = useSetup();

  return (
    <>
      <div className="the_top_bar">
        <img src={arrowLeftP} className="the_top_bar-back" />

        <span className="the_top_bar-title">{title}</span>
      </div>
      <div className="the_top_bar-spacer"></div>
    </>
  );
}

export default TheTopBar;
