import "./index.scss";

import { useHistory, useParams } from "react-router-dom";

import Button from "@mui/material/Button";

import Loading from "../../components/Loading";
import TheTopBar from "../../components/TheTopBar";
import { useSelf } from "../../context/Self/useSelf";
import Browse from "../../imgComponents/Browse";
import Cards from "../../imgComponents/Cards";
import Fire from "../../imgComponents/Fire";
import Star from "../../imgComponents/Star";
import UserEdit from "../../imgComponents/UserEdit";
import Write from "../../imgComponents/Write";
import { dateFormat } from "../../utils/dateFormat";
import { useDeck } from "./hooks/useDeck";
import { useRecord } from "./hooks/useRecord";

type DeckIntroProps = {};

function DeckIntro(props: DeckIntroProps) {
  const {} = props;
  let { id } = useParams<{ id: string }>();
  const { deck, switchFavorite, delDeck } = useDeck(id);
  const { self } = useSelf();

  const { record } = useRecord(id);

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

      <div className="deck_intro-study deck_intro-action_container">
        <h4>开始学习</h4>
        {record && (
          <div className="deck_intro-study-process">
            当前学习进度：已学会{record.learnt}题，
            {record.total === record.learnt
              ? "已学完"
              : `仍需学习${record.total - record.learnt}题`}
          </div>
        )}
        <div className="deck_intro-action_container-actions">
          <div
            className="deck_intro-action_container-actions-button"
            onClick={jumpToQuestion}
          >
            <Browse className="deck_intro-action_container-actions-button-icon scale-110" />
            浏览
          </div>
          <div
            className="deck_intro-action_container-actions-button"
            onClick={jumpToQuestion}
          >
            <Cards className="deck_intro-action_container-actions-button-icon" />
            单词卡
          </div>
          <div
            className="deck_intro-action_container-actions-button"
            onClick={jumpToQuestion}
          >
            <Write className="deck_intro-action_container-actions-button-icon scale-90" />
            填空
          </div>
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
