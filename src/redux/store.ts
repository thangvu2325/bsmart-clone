import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
export const store = configureStore({
  reducer: {
    courses: coursesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
