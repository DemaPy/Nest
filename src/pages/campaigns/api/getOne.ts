import { api } from "../../../utils/api";
import { BackendResponse, CampaignInterface } from "../types";

/* eslint-disable no-useless-catch */
export async function getOne(
  DTO: (data: BackendResponse) => CampaignInterface | undefined,
  id: CampaignInterface["id"]
): Promise<CampaignInterface | undefined> {
  return DTO(await api(`http://localhost:3000/users/${id}`));
}
