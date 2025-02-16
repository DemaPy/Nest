import { api } from "../../../utils/api";
import { BackendResponse, CampaignInterface } from "../types";

/* eslint-disable no-useless-catch */
export async function getAll(
  DTO: (data: BackendResponse) => CampaignInterface | undefined
): Promise<CampaignInterface[]> {
  return (await api(`http://localhost:3000/campaigns/`) ?? []).map(DTO);
}
