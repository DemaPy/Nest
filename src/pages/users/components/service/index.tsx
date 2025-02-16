import { PropsWithChildren } from "react";
import GetUser from "./GetUser";
import GetUsers from "./GetUsers";

export const ServiceComponents = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

ServiceComponents.GetUser = GetUser;
ServiceComponents.GetUsers = GetUsers;
