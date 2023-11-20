import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
interface CoursesFilterState {
  pg: string;
  pf: string;
  pt: string;
  typeOfLearning: Array<string>;
  level: Array<string>;
  NameCourse: string;
  sort: string;
  filterCourseCate: Array<string>;
}

// Define the initial state using that type
const initialState: CoursesFilterState = {
  pg: "1",
  pf: "0",
  pt: "10000000",
  NameCourse: "",
  sort: "",
  typeOfLearning: [],
  level: [],
  filterCourseCate: [],
};

export const CoursesFilterSlice = createSlice({
  name: "coursesFilter",
  initialState,
  reducers: {
    changeFilter(state, action) {
      // Correct the state update using the spread operator
      return { ...state, ...action.payload };
    },
  },
});
export const { changeFilter } = CoursesFilterSlice.actions;

export default CoursesFilterSlice.reducer;
