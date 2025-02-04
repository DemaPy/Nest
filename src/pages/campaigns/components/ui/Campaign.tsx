import { CampaignInterface } from "../../types";

interface CampaignProps {
  campaign: CampaignInterface | undefined;
}

const Campaign = ({ campaign }: CampaignProps) => {
  return <pre>{JSON.stringify(campaign, null, 4)}</pre>;
};

export default Campaign;
