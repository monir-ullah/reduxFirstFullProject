import { ReactNode } from "react";

export type TRouterElement = {
  path: string;
  element?: ReactNode;
  children?: TRouterElement[];
};
