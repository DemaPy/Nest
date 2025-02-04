import { BackendResponse, CampaignInterface } from "../types";

export function CampaignDTO(
  data: BackendResponse
): CampaignInterface | undefined {
  if (data) {
    return {
      id: data?.id,
      title: data?.title,
      content: data?.content,
    };
  }
  return;
}
