import { ReactNode } from "react";

export type TMenuItem = {
  key: string;
  icon?: string;
  label?: ReactNode;
  children?: TMenuItem[];
};
