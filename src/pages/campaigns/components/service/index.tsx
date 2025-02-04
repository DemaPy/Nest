import { PropsWithChildren } from "react";
import GetCampaign from "./GetCampaign";
import GetCampaigns from "./GetCampaigns";

export const ServiceComponents = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

ServiceComponents.GetCampaign = GetCampaign;
ServiceComponents.GetCampaigns = GetCampaigns;
