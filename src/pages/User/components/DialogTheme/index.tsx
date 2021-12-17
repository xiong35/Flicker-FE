import "./index.scss";

import {
    Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel,
    LinearProgress, TextField
} from "@mui/material";

import { colors } from "./data/colors";

export default function DialogTheme() {
  return (
    <Dialog open={false} className="dialog_theme">
      <DialogTitle>切换主题</DialogTitle>
      <DialogContent>
        {colors.map((color) => (
          <div
            className="dialog_theme-color"
            style={{ backgroundColor: color.bg }}
            key={color.name}
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
        ))}
      </DialogContent>
      <DialogActions>
        <Button>确认</Button>
        <Button>取消</Button>
      </DialogActions>
    </Dialog>
  );
}
