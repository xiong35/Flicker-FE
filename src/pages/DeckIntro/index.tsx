import "./index.scss";

import { useHistory, useParams } from "react-router-dom";

import Button from "@mui/material/Button";

import Loading from "../../components/Loading";
import TheTopBar from "../../components/TheTopBar";
import { useSelf } from "../../context/Self/useSelf";
import Fire from "../../imgComponents/Fire";
import Star from "../../imgComponents/Star";
import { dateFormat } from "../../utils/dateFormat";
import { useDeck } from "./hooks/useDeck";

type DeckIntroProps = {};

function DeckIntro(props: DeckIntroProps) {
  const {} = props;
  let { id } = useParams<{ id: string }>();
  const { deck, switchFavorite, delDeck } = useDeck(id);
  const { self } = useSelf();

  const history = useHistory();
  function jumpToQuestion() {
    history.push(`/deck/${id}/question`);
  }

  if (!deck) return <Loading></Loading>;

  return (
    <div className="deck_intro">
      <TheTopBar title="详情" />
      <div className="deck_intro-info">
        <div className="deck_intro-info-title">{deck.name}</div>
        <div className="deck_intro-info-body">
          <div className="deck_intro-info-body-create">
            <span className="deck_intro-info-body-create-by t-p">
              @{deck.owner_name}
            </span>
            <span className="deck_intro-info-body-create-at">
              {dateFormat(deck.create_time)}
            </span>
          </div>
          <div className="spacer"></div>
          <div className="deck_intro-info-body-collection">
            <Star className="deck_intro-info-body-icon" />
            {deck.favorite_count}
          </div>
          <div className="deck_intro-info-body-hot">
            <Fire className="deck_intro-info-body-icon scale-110" />
            {deck.visit_count}
          </div>
        </div>
        <div className="deck_intro-info-brief">{deck.description}</div>
      </div>

      <div className="deck_intro-some_ques">
        <div className="deck_intro-some_ques-title">题目预览</div>
      </div>

      <div className="deck_intro-study deck_intro-action_container">
        <h4>学习</h4>
        <div className="deck_intro-action_container-actions">
          <Button onClick={jumpToQuestion} variant="outlined">
            浏览
          </Button>
          <Button onClick={jumpToQuestion} variant="outlined">
            单词卡
          </Button>
          <Button onClick={jumpToQuestion} variant="outlined">
            填空
          </Button>
          <Button onClick={jumpToQuestion} variant="outlined">
            配对
          </Button>
        </div>
      </div>
      <div className="deck_intro-manage deck_intro-action_container">
        <h4>操作</h4>
        <div className="deck_intro-action_container-actions">
          <Button
            variant={deck.is_favorite ? "contained" : "outlined"}
            color="secondary"
            onClick={switchFavorite}
          >
            {deck.is_favorite ? "已收藏" : "收藏"}
          </Button>
          {deck.owner_id === self.id && (
            <Button variant="outlined" color="error" onClick={delDeck}>
              删除
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeckIntro;
