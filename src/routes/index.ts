// Layouts

// Pages
import { lazy } from "react";
import { RouteType } from "../type/type";
import routes from "../config/route";
const Home = lazy(() => import("../page/Home"));
const CoursePage = lazy(() => import("../page/Course"));

// Public routes

const publicRoutes: Array<RouteType> = [
  { path: routes.home, component: Home },
  { path: routes.course, component: CoursePage },
  { path: routes.aboutus, component: Home },
  { path: routes.blog, component: Home },
  { path: routes.mentor, component: Home },
  { path: routes.stem, component: Home },
];

const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
