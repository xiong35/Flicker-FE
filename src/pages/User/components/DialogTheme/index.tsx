import "./index.scss";

import {
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel,
    LinearProgress, TextField
} from "@mui/material";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { changeTheme } from "../../../../redux/theme/themeSlice";
import { colors } from "./data/colors";

type DialogThemeProps = {
  open: boolean;
  cancel: () => void;
};

let lastTheme = "";

export default function DialogTheme(props: DialogThemeProps) {
  const { cancel, open } = props;
  const dispatch = useAppDispatch();

  const switchTheme = (theme: string) => {
    dispatch(changeTheme(theme));
    cancel();
  };

  return (
    <Dialog open={open} className="dialog_theme reset_mui_dialog">
      <DialogTitle>切换主题</DialogTitle>
      <DialogContent className="dialog_theme-content">
        {colors.map((color) => (
          <div
            className="dialog_theme-color"
            key={color.name}
            onClick={() => switchTheme(color.className)}
          >
            <div
              className="dialog_theme-color-bg"
              style={{ backgroundColor: color.bg }}
            >
              <div
                className="dialog_theme-color-primary"
                style={{ backgroundColor: color.primary }}
              >
                <div
                  className="dialog_theme-color-secondary"
                  style={{ backgroundColor: color.secondary }}
                ></div>
              </div>
              <div
                className="dialog_theme-color-on_bg"
                style={{ backgroundColor: color.onBg }}
              ></div>
            </div>
            <div
              className="dialog_theme-color-name"
              style={{ color: color.primary }}
            >
              {color.name}
            </div>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={cancel}>关闭</Button>
      </DialogActions>
    </Dialog>
  );
}
