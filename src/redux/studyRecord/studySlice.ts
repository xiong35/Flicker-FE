// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { DeckRecord } from "../../models/study";
// import { Card } from "../../models/card";

// // 定义 state 对应类型的初始值
// const initialState: DeckRecord[] = [];

// export const studySlice = createSlice({
//   name: "studyReducer",
//   // createSlice 将会根据 initialState 参数推断 state 的类型
//   initialState,
//   reducers: {
//     // 使用 PayloadAction 类型来声明 action.payload 的内容
//     learnCard: (
//       state,
//       // 用 ConstructorParameters 获取 ToastType 类的第一个参数类型传给 PayloadAction
//       action: PayloadAction<Card>
//     ) => {
//       const toast = {
//         ...action.payload,
//       };
//       state.toasts = [...state.toasts, toast];
//     },

//     removeToast: (state, action: PayloadAction<string>) => {
//       const toastToRemove = [...state.toasts].findIndex(
//         (toast) => toast._id === action.payload
//       );

//       state.toasts.splice(toastToRemove, 1);
//     },
//   },
// });

// export const { addToast, removeToast } = toastsSlice.actions;

// export default toastsSlice.reducer;
