import "./index.scss";

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

import { useSetup } from "./hooks";

type DialogDeleteRecordProps = {
  cancel: () => void;
  confirm: () => void;
};

function DialogDeleteRecord(props: DialogDeleteRecordProps) {
  const { cancel, confirm } = props;

  return (
    <Dialog open className="dialog_load_cards">
      <DialogTitle>确认删除</DialogTitle>
      <DialogContent>
        将删除本地和云端的学习记录（包括学习进度和已经学会的题），是否确认删除？
      </DialogContent>
      <DialogActions>
        <Button onClick={confirm}>确定</Button>
        <Button onClick={cancel}>取消</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogDeleteRecord;
