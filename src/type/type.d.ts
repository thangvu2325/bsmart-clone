import { ComponentType } from "react";

type RouteType<> = {
  path: string;
  component: ComponentType;
  layout?: ComponentType;
};
type iconType = {
  width?: string;
  height?: string;
  className?: string;
};
type courseType = {
  courseId: string;
  mentor: string;
  banner?: string;
  avatar?: string;
  course?: string;
  session?: number;
  filterCourseCate: string;
  typeOfLearning: Array<string>;
  level: string;
  price: number;
  count?: number;
  description: string;
  rate?: number;
};
type mentorType = {
  mentorId: string;
  banner: string;
  mentor: string;
  description: string;
};
