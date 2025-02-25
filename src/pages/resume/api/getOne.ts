import { api } from "../../../utils/api";

export async function getOne() {
  return api(`http://localhost:3000/stripe/resume/`, {  method: "POST" });
}
