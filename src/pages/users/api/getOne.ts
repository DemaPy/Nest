import { api } from "../../../utils/api";
import { BackendResponse, UserInterface } from "../types";

/* eslint-disable no-useless-catch */
export async function getOne(
  DTO: (data: BackendResponse) => UserInterface | undefined,
  id: UserInterface["id"]
): Promise<UserInterface | undefined> {
  return DTO(await api(`http://localhost:3000/users/${id}`));
}
