import "./index.scss";

import { useHistory } from "react-router-dom";

import ArrowLeftP from "../../imgComponents/ArrowLeftP";
import { useSetup } from "./hooks";

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
        <ArrowLeftP
          className="the_top_bar-back"
          onClick={() => {
            const lastHref = window.location.href;
            history.goBack();

            setTimeout(() => {
              if (lastHref === window.location.href) history.push("/home");
            }, 60);
          }}
        />
        <span className="the_top_bar-title">{title}</span>
      </div>
      <div className="the_top_bar-spacer"></div>
    </>
  );
}

export default TheTopBar;
