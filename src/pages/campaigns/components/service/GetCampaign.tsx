import { useQuery } from "@tanstack/react-query";
import { CampaignInterface } from "../../types";
import { getOne } from "../../api/getOne";
import { CampaignDTO } from "../../dto";

const GetCampaign = ({
  id,
  children,
}: {
  id: string;
  children: (props: CampaignInterface | undefined) => JSX.Element;
}) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`campaign-${id}`],
    queryFn: () => getOne(CampaignDTO, id),
  });

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error...";
  }
  
  return children(data);
};

export default GetCampaign;
