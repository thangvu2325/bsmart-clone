// Layouts

// Pages
import CoursePage from "../page/Course";
import Home from "../page/Home";
import { RouteType } from "../type/type";
import routes from "../config/route";
import Loading from "../Loading";
// Public routes

const publicRoutes: Array<RouteType> = [
  { path: routes.home, component: Home },
  { path: routes.course, component: CoursePage },
  { path: routes.aboutus, component: Home },
  { path: routes.blog, component: Home },
  { path: routes.mentor, component: Home },
  { path: routes.stem, component: Home },
  { path: "/testLoading", component: Loading },
];

const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
