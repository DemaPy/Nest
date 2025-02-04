import { SharedComponents } from "../../components";
import { ServiceComponents } from "./components/service";
import { UiComponents } from "./components/ui";

const Campaigns = () => {
  return (
    <>
      <ServiceComponents.GetCampaigns>
        {(campaigns) => (
          <SharedComponents.List data={campaigns}>
            {(campaign) => <UiComponents.Campaign key={campaign.id} campaign={campaign} />}
          </SharedComponents.List>
        )}
      </ServiceComponents.GetCampaigns>
      <ServiceComponents.GetCampaign id="2">
        {(campaign) => <UiComponents.Campaign campaign={campaign} />}
      </ServiceComponents.GetCampaign>
    </>
  );
};

export default Campaigns;
