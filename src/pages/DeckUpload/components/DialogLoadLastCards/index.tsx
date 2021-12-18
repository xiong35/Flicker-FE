import "./index.scss";

import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

type DialogLoadLastCardsProps = {
  cancel: () => void;
  confirm: () => void;
};

export default function DialogLoadLastCards(props: DialogLoadLastCardsProps) {
  const { cancel, confirm } = props;

  return (
    <Dialog open className="dialog_load_cards">
      <DialogTitle>有上次未提交的卡片集，是否恢复</DialogTitle>
      <DialogActions>
        <Button onClick={confirm}>恢复</Button>
        <Button onClick={cancel}>取消</Button>
      </DialogActions>
    </Dialog>
  );
}
