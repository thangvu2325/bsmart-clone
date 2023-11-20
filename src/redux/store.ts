import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import mentorsSlice from "./mentorsSlice";
import settingsSlice from "./settingsSlice";
import coursesFilterSlice from "./coursesFilterSlice";
export const store = configureStore({
  reducer: {
    courses: coursesSlice,
    mentors: mentorsSlice,
    settings: settingsSlice,
    coursesFilter: coursesFilterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
