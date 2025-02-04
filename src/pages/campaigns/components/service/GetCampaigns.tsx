import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../api/getAll";
import { CampaignInterface } from "../../types";
import { CampaignDTO } from "../../dto";

const GetCampaigns = ({
  children,
}: {
  children: (props: CampaignInterface[]) => JSX.Element;
}) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => getAll(CampaignDTO),
  });

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error...";
  }
  return children(data ?? []);
};

export default GetCampaigns;
