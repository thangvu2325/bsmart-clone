import { createSelector } from "@reduxjs/toolkit";
import { courseType } from "../type/type";
import { RootState } from "./store";
export const coursesSelector = (state: RootState) => {
  return state.courses.data;
};
export const coursesFilterSelector = (state: RootState) => {
  return state.coursesFilter;
};
export const mostFamoustCoursesSelecter = createSelector(
  coursesSelector,
  (coursesList) => {
    const sortedCourses = [...coursesList].sort(
      (a: courseType, b: courseType) => {
        const countA = a.count ?? 0; // Use 0 if count is undefined
        const countB = b.count ?? 0; // Use 0 if count is undefined
        return countB - countA;
      }
    );

    return sortedCourses.slice(0, 8);
  }
);

export const getUrgentlyCoursesSelecter = createSelector(
  coursesSelector,
  (coursesList) => {
    const sortedCourses = [...coursesList].filter(
      (course) => course.level === "cap_toc"
    );
    return sortedCourses;
  }
);

export const mentorsSelector = (state: RootState) => {
  return state.mentors.data;
};
export const settingsSelector = (state: RootState) => {
  return state.settings;
};
export const sidebarStateSelector = (state: RootState) => {
  return state.settings.sidebarState;
};
export const coursesRemainingSelector = createSelector(
  coursesSelector,
  coursesFilterSelector,
  (coursesList, coursesFilter) => {
    const priceFrom =
      !!coursesFilter.pf &&
      parseInt(coursesFilter.pf?.replace(/[^\d]/g, ""), 10);
    const priceTo =
      !!coursesFilter.pt &&
      parseInt(coursesFilter.pt?.replace(/[^\d]/g, ""), 10);
    let coursesSort = coursesList.filter((course) => {
      const coursePrice = Number(course.price);

      const isPriceInRange =
        coursePrice >= Number(priceFrom && priceFrom) &&
        coursePrice <= Number(priceTo || 10000000);
      const isLevelMatch =
        !coursesFilter.level.length ||
        coursesFilter.level.includes(course.level);
      const isTypeOfLearningMatch =
        !coursesFilter.typeOfLearning.length ||
        course.typeOfLearning.some((type) =>
          coursesFilter.typeOfLearning.includes(type)
        );
      const isSearching =
        course.course &&
        course.course
          .toUpperCase()
          .includes(
            coursesFilter.NameCourse
              ? coursesFilter.NameCourse.toUpperCase()
              : ""
          );
      const isCourseCateMatch =
        !coursesFilter.filterCourseCate.length ||
        coursesFilter.filterCourseCate.includes(course.filterCourseCate);

      return (
        isSearching &&
        isPriceInRange &&
        isLevelMatch &&
        isTypeOfLearningMatch &&
        isCourseCateMatch
      );
    });
    switch (coursesFilter.sort) {
      case "new":
        break;
      case "popular":
        coursesSort = coursesSort.sort((a: courseType, b: courseType) => {
          const countA = a.count ?? 0; // Use 0 if count is undefined
          const countB = b.count ?? 0; // Use 0 if count is undefined
          return countB - countA;
        });
        break;
      case "soonStart":
        break;
      case "az":
        coursesSort.sort((a: courseType, b: courseType) =>
          (a.course ?? "").localeCompare(b.course ?? "")
        );
        break;
      case "za":
        coursesSort.sort((a: courseType, b: courseType) =>
          (b.course ?? "").localeCompare(a.course ?? "")
        );
    }
    return coursesSort;
  }
);
