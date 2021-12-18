import { configureStore } from "@reduxjs/toolkit";

import studyReducer from "./studyRecord/studySlice";
import themeReducer from "./theme/themeSlice";
import toastsReducer from "./toasts/toastsSlice";

export const store = configureStore({
  reducer: {
    toastsReducer,
    themeReducer,
    studyReducer,
  },
});

// 由 store 自身来推断 RootState 和 AppDispatch 的类型
export type RootState = ReturnType<typeof store.getState>;
// 推断类型：{posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;