import { PropsWithChildren } from "react";
import Campaign from "./Campaign";

export const UiComponents = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

UiComponents.Campaign = Campaign;
