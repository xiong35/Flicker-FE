import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Card } from "../../models/card";
import { DeckRecord } from "../../models/study";
import { getAllLocalDeckRecords } from "../../utils/studyRecords/syncRecord";

// 定义 state 对应类型的初始值
const initialState: { deckRecords: DeckRecord[] } = { deckRecords: [] };

export const studySlice = createSlice({
  name: "studyReducer",
  // createSlice 将会根据 initialState 参数推断 state 的类型
  initialState,
  reducers: {
    /** 初始化, 从 local storage 中获得所有学习记录 */
    syncDeckRecords: (state) => {
      state.deckRecords = getAllLocalDeckRecords();
    },
  },
});

export const { syncDeckRecords } = studySlice.actions;

export default studySlice.reducer;
