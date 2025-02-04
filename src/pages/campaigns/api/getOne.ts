import { BackendResponse, CampaignInterface } from "../types";

/* eslint-disable no-useless-catch */
export async function getOne(
  DTO: (data: BackendResponse) => CampaignInterface | undefined,
  id: CampaignInterface["id"]
): Promise<CampaignInterface | undefined> {
  try {
    const response = await fetch(`http://localhost:3000/campaigns/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const jsonResponse = await response.json();
    return DTO(jsonResponse.data);
  } catch (error) {
    throw error;
  }
}
