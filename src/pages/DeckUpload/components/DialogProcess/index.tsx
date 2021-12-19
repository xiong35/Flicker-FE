import "./index.scss";

import { Dialog, DialogContent, DialogTitle, LinearProgress } from "@mui/material";

type DialogProcessProps = {
  showCardPostProgress: boolean;
  showDeckProgress: boolean;
  cardPostProgress: number;
  postCardsLength: number;
  cardsLength: number;
};

export default function DialogProcess(props: DialogProcessProps) {
  const {
    cardPostProgress,
    postCardsLength,
    showCardPostProgress,
    showDeckProgress,
  } = props;
  return (
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
                value={~~((cardPostProgress / postCardsLength) * 100)}
                className="deck_upload-dialog-content-linear_progress"
              />
              <div className="deck_upload-dialog-content-progress_text">{`${cardPostProgress}/${postCardsLength}`}</div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
