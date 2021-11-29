import "./index.scss";

import {
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel,
    LinearProgress, TextField
} from "@mui/material";

import TheTopBar from "../../components/TheTopBar";
import AddIcon from "../../imgComponents/AddIcon";
import AddUpper from "../../imgComponents/AddUpper";
import TrashBin from "../../imgComponents/TrashBin";
import { Card } from "../../models/card";
import { useCards } from "./hooks/useCards";
import { useCreate } from "./hooks/useCreate";
import { useDeck } from "./hooks/useDeck";

type DeckUploadProps = {};

function DeckUpload(props: DeckUploadProps) {
  const {} = props;
  const {
    form,
    setForm,
    formErrorHint,
    doValidate,
    clearError,
    createDeck,
    showDeckProgress,
  } = useDeck();
  const {
    addCard,
    cards,
    removeCard,
    updateCard,
    createCards,
    cardPostProgress,
    showCardPostProgress,
    syncToLocalStorage,
  } = useCards();
  const { create } = useCreate({ createDeck, createCards });

  const postCards = cards.filter((card) => card.answer && card.question);

  return (
    <div className="deck_upload">
      <TheTopBar title="创建卡组" />
      <TextField
        className="deck_upload-input m"
        label="标题"
        variant="outlined"
        placeholder="例如：六级英语词汇"
        value={form.name}
        onChange={(e) => setForm({ name: e.target.value })}
        onBlur={() => doValidate("name")}
        helperText={formErrorHint.name}
        error={!!formErrorHint.name}
        onFocus={() => clearError("name")}
      />
      <TextField
        className="deck_upload-input m"
        label="添加描述..."
        variant="outlined"
        multiline={true}
        maxRows="7"
        value={form.description}
        onChange={(e) => setForm({ description: e.target.value })}
        onBlur={() => doValidate("description")}
        helperText={formErrorHint.description}
        error={!!formErrorHint.description}
        onFocus={() => clearError("description")}
      />
      <FormControlLabel
        className="deck_upload-access m"
        control={
          <Checkbox
            checked={form.access === "1"}
            onChange={() =>
              setForm({ access: form.access === "0" ? "1" : "0" })
            }
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
                onClick={() => addCard(new Card(), card.id)}
              />
              <TrashBin
                className="deck_upload-cards-item-opts-icon"
                onClick={() => removeCard(card.id)}
              />
            </div>
            <TextField
              className="deck_upload-input m light"
              label="题目"
              variant="standard"
              multiline={true}
              maxRows="7"
              value={card.question}
              onChange={(e) => updateCard(card.id, "question", e.target.value)}
            />
            <TextField
              className="deck_upload-input m light"
              label="答案"
              variant="standard"
              multiline={true}
              maxRows="7"
              value={card.answer}
              onChange={(e) => updateCard(card.id, "answer", e.target.value)}
            />
          </div>
        ))}
        <div
          className="deck_upload-cards-add"
          onClick={() => addCard(new Card())}
        >
          <AddIcon className="deck_upload-cards-add-icon" />
          添加卡片
        </div>
        <Button variant="contained" onClick={() => create(cards)}>
          创建
        </Button>
      </div>

      <Dialog
        open={showCardPostProgress || showDeckProgress}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="deck_upload-dialog"
      >
        <DialogTitle>当前进度</DialogTitle>
        <DialogContent>
          <div className="deck_upload-dialog-content">
            {showDeckProgress ? (
              <div>正在创建卡片集……</div>
            ) : (
              <>
                <LinearProgress
                  variant="determinate"
                  value={~~((cardPostProgress / postCards.length) * 100)}
                  className="deck_upload-dialog-content-linear_progress"
                />
                <div className="deck_upload-dialog-content-progress_text">{`${cardPostProgress}/${cards.length}`}</div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeckUpload;
