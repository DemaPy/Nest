import { PropsWithChildren } from "react";
import { User } from "./User";

export const UiComponents = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

UiComponents.User = User;
