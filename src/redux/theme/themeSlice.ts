import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 定义 slice state 的类型
interface ThemeState {
  theme: string;
}

const theme = window.localStorage.getItem("flicker-theme") || "";

// 定义 state 对应类型的初始值
const initialState: ThemeState = {
  theme,
};

export const themeSlice = createSlice({
  name: "themeReducer",
  // createSlice 将会根据 initialState 参数推断 state 的类型
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      window.localStorage.setItem("flicker-theme", action.payload);
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
