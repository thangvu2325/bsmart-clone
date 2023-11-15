import { ComponentType } from "react";

export type RouteType<> = {
  path: string;
  component: ComponentType;
  layout?: ComponentType;
};
