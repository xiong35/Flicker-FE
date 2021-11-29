import "./index.scss";

import { Alert } from "@mui/material";

import { useAppSelector } from "../../hooks/useAppSelector";

export default function Toasts() {
  const toasts = useAppSelector((state) => state.toastsReducer.toasts);

  return (
    <div className="toasts">
      {toasts.map((toast) => (
        <Alert
          variant="outlined"
          severity={toast.severity}
          key={toast._id}
          className="toasts-toast"
        >
          {toast.value}
        </Alert>
      ))}
    </div>
  );
}
