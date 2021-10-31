import "./index.scss";

import { useHistory } from "react-router-dom";

import { useSetup } from "./hooks";
import arrowLeftP from "../../assets/img/arrow-left-p.svg";

type TheTopBarProps = {
  title: string;
};

function TheTopBar(props: TheTopBarProps) {
  const { title } = props;
  const {} = useSetup();

  const history = useHistory();

  return (
    <>
      <div className="the_top_bar">
        <img
          src={arrowLeftP}
          onClick={() => history.goBack()}
          className="the_top_bar-back"
        />

        <span className="the_top_bar-title">{title}</span>
      </div>
      <div className="the_top_bar-spacer"></div>
    </>
  );
}

export default TheTopBar;