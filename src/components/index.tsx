import { PropsWithChildren } from "react";
import List from "./List";

export const SharedComponents = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

SharedComponents.List = List;
