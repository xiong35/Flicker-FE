import "./index.scss";

import { useHistory } from "react-router-dom";

import Button from "@mui/material/Button";

import { useSetup } from "./hooks";
import TheTopBar from "../../components/TheTopBar";

type DeckIntroProps = {};

function DeckIntro(props: DeckIntroProps) {
  const {} = props;
  const { id } = useSetup();
  const history = useHistory();

  return (
    <div className="deck_intro">
      <TheTopBar title="详情" />
      <div className="deck_intro-info">
        <div className="deck_intro-info-title">标题标题</div>
        <div className="deck_intro-info-brief">
          简介简介简介简介简介简介简介简介简介简介 简介 简介 简介 简介
          简介简介简介简介简介简介
        </div>
        <div className="deck_intro-info-data">
          <div className="deck_intro-info-data-question_count">题目数: 56</div>
          <div className="deck_intro-info-data-hot">热度: 123</div>
          <div className="spacer"></div>
          <div className="deck_intro-info-data-time">创建于: 2020/2/2</div>
        </div>
      </div>

      <div className="deck_intro-study deck_intro-action_container">
        <h4>学习</h4>
        <div className="deck_intro-action_container-actions">
          <Button
            onClick={() => history.push("/deck/question/123")}
            variant="outlined"
          >
            浏览
          </Button>
          <Button
            onClick={() => history.push("/deck/question/123")}
            variant="outlined"
          >
            单词卡
          </Button>
          <Button
            onClick={() => history.push("/deck/question/123")}
            variant="outlined"
          >
            填空
          </Button>
          <Button
            onClick={() => history.push("/deck/question/123")}
            variant="outlined"
          >
            配对
          </Button>
        </div>
      </div>
      <div className="deck_intro-manage deck_intro-action_container">
        <h4>操作</h4>
        <div className="deck_intro-action_container-actions">
          <Button variant="outlined" color="secondary">
            收藏
          </Button>
          <Button variant="outlined" color="error">
            删除
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeckIntro;
