import { BackendResponse, UserInterface } from "../types";

export function UserDTO(
  data: BackendResponse
): UserInterface | undefined {
  if (data) {
    return {
      id: data?.id,
      name: data?.name,
      email: data?.email,
    };
  }
  return;
}
