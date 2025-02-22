import { api } from "../../../utils/api";

export async function verify(token: string) {
  const response = await api<{ data: { message: string } }>(`http://localhost:3000/auth/verify-email?token=${token}`, {
    method: 'POST',
    headers: {
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")!).id
    }
  });
  
  return response
}