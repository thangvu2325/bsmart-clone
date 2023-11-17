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
type cardType = {
  mentor: string;
  banner?: string;
  avatar?: string;
  course?: string;
  session?: number;
  price?: number;
  count?: number;
  description: string;
  rate?: number;
};
