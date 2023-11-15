// Layouts

// Pages
import Home from "../page/Home";
import { RouteType } from "../type/type";

// Public routes

const publicRoutes: Array<RouteType> = [{ path: "/", component: Home }];

const privateRoutes: Array<RouteType> = [];

export { publicRoutes, privateRoutes };
