import { api } from "../../../utils/api";
import { LoginResponse } from "../types/login";

export async function login() {
  const response = await api<LoginResponse>(`http://localhost:3000/auth/login/`, {
    method: 'POST',
  });
  if (response.accessToken) {
    localStorage.setItem('accessToken', response.accessToken)
  }

  return response
}
