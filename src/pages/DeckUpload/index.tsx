import "./index.scss";

import { useHistory, useLocation, useParams } from "react-router-dom";

import {
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel,
    LinearProgress, TextField
} from "@mui/material";

import TheTopBar from "../../components/TheTopBar";
import AddIcon from "../../imgComponents/AddIcon";
import AddUpper from "../../imgComponents/AddUpper";
import TrashBin from "../../imgComponents/TrashBin";
import { Card } from "../../models/card";
import DialogLoadLastCards from "./components/DialogLoadLastCards";
import DialogProcess from "./components/DialogProcess";
import { useCards } from "./hooks/useCards";
import { useCreate } from "./hooks/useCreate";
import { useDeck } from "./hooks/useDeck";
import { useEdit } from "./hooks/useEdit";
import { useLoadLast } from "./hooks/useLoadLast";

type DeckUploadProps = {};

function DeckUpload(props: DeckUploadProps) {
  const {} = props;
  const param = useParams<{ id?: string }>();

  const {
    form,
    setForm,
    setFormAndWriteToLocal,
    formErrorHint,
    onDeckInputBlur,
    clearError,
    createDeck,
    showDeckProgress,
    updateAccess,
  } = useDeck(param.id);
  const {
    addCard,
    setCards,
    cards,
    removeCard,
    updateCard,
    createCards,
    cardPostProgress,
    showCardPostProgress,
    onCardsInputBlur,
  } = useCards(param.id);
  const { create } = useCreate({ createDeck, createCards });
  const {} = useEdit({ setCards, setForm, id: param.id });

  const { cancelLoad, showDialogLoadLast, loadLast } = useLoadLast({
    setCards,
    setForm,
  });

  const history = useHistory();

  const postCards = cards.filter((card) => card.answer && card.question);

  return (
    <div className="deck_upload">
      <TheTopBar title="创建卡组" />
      <TextField
        className="deck_upload-input m reset_mui_input_primary"
        label="标题"
        variant="outlined"
        placeholder="例如：六级英语词汇"
        value={form.name}
        onChange={(e) => setFormAndWriteToLocal({ name: e.target.value })}
        onBlur={() => onDeckInputBlur("name")}
        helperText={formErrorHint.name}
        error={!!formErrorHint.name}
        onFocus={() => clearError("name")}
      />
      <TextField
        className="deck_upload-input m reset_mui_input_primary"
        label="添加描述..."
        variant="outlined"
        multiline={true}
        maxRows="7"
        value={form.description}
        onChange={(e) =>
          setFormAndWriteToLocal({ description: e.target.value })
        }
        onBlur={() => onDeckInputBlur("description")}
        helperText={formErrorHint.description}
        error={!!formErrorHint.description}
        onFocus={() => clearError("description")}
      />
      <FormControlLabel
        className="deck_upload-access m"
        control={
          <Checkbox
            checked={form.access === "1"}
            onChange={() => {
              updateAccess();
              setFormAndWriteToLocal({
                access: form.access === "0" ? "1" : "0",
              });
            }}
          />
        }
        label="公开卡组"
        labelPlacement="end"
      />
      <div className="deck_upload-cards">
        {cards.map((card, index) => (
          <div className="deck_upload-cards-item" key={card.id}>
            <div className="deck_upload-cards-item-opts">
              <div>{index + 1}</div>
              <div className="spacer"></div>
              <AddUpper
                className="deck_upload-cards-item-opts-icon"
                onClick={() => addCard(new Card(), param.id, card.id)}
              />
              <TrashBin
                className="deck_upload-cards-item-opts-icon"
                onClick={() => removeCard(card.id)}
              />
            </div>
            <TextField
              className="deck_upload-input m light reset_mui_input_primary"
              label="题目"
              variant="standard"
              multiline={true}
              maxRows="7"
              value={card.question}
              onBlur={() => onCardsInputBlur(card.id)}
              onChange={(e) => updateCard(card.id, "question", e.target.value)}
            />
            <TextField
              className="deck_upload-input m light reset_mui_input_primary"
              label="答案"
              variant="standard"
              multiline={true}
              maxRows="7"
              value={card.answer}
              onChange={(e) => updateCard(card.id, "answer", e.target.value)}
              onBlur={() => onCardsInputBlur(card.id)}
            />
          </div>
        ))}
        <div
          className="deck_upload-cards-add"
          onClick={() => addCard(new Card(), param.id)}
        >
          <AddIcon className="deck_upload-cards-add-icon" />
          添加卡片
        </div>
        <Button
          variant="contained"
          className="reset_mui_button_contained_primary"
          onClick={() => {
            if (!param.id) create(cards);
            else history.push(`/deck/${param.id}/intro`);
          }}
        >
          {param.id ? "完成" : "创建"}
        </Button>
      </div>

      <DialogProcess
        cardPostProgress={cardPostProgress}
        cardsLength={cards.length}
        postCardsLength={postCards.length}
        showCardPostProgress={showCardPostProgress}
        showDeckProgress={showDeckProgress}
      />

      {showDialogLoadLast && (
        <DialogLoadLastCards cancel={cancelLoad} confirm={loadLast} />
      )}
    </div>
  );
}

export default DeckUpload;
