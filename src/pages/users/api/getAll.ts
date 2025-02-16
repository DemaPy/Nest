import { api } from "../../../utils/api";
import { BackendResponse, UserInterface } from "../types";

/* eslint-disable no-useless-catch */
export async function getAll(
  DTO: (data: BackendResponse) => UserInterface | undefined
): Promise<UserInterface[]> {
  return (await api(`http://localhost:3000/users/`) ?? []).map(DTO);
}
