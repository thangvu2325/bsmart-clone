import { ComponentType } from "react";

export type RouteType<> = {
  path: string;
  component: ComponentType;
  layout?: ComponentType;
};
export type iconType = {
  width?: string;
  height?: string;
  className?: string;
};
