import { courseType } from "../type/type";
import { RootState } from "./store";

export const mostFamoustCoursesSelecter = (state: RootState) => {
  const coursesList: Array<courseType> = [...state.courses.data]; // Create a copy
  coursesList.sort((a: courseType, b: courseType) => {
    const countA = a.count ?? 0; // Use 0 if count is undefined
    const countB = b.count ?? 0; // Use 0 if count is undefined
    return countB - countA;
  });
  return coursesList.slice(0, 8);
};
export const getUrgentlyCoursesSelecter = (state: RootState) => {
  const coursesList: Array<courseType> = [...state.courses.data]; // Create a copy

  return coursesList.slice(0, 8);
};
