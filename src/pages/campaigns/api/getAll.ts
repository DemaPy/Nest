import { BackendResponse, CampaignInterface } from "../types";

/* eslint-disable no-useless-catch */
export async function getAll(
  DTO: (data: BackendResponse) => CampaignInterface | undefined
): Promise<CampaignInterface[]> {
  try {
    const response = await fetch("http://localhost:3000/campaigns");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const jsonResponse = await response.json();
    return (jsonResponse.data ?? [])?.map(DTO);
  } catch (error) {
    throw error;
  }
}
