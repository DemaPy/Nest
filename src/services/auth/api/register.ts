import { api } from "../../../utils/api";

export async function register(payload: { email: string; password: string }) {
  const response = await api<Record<string, string>>(
    `http://localhost:3000/auth/register/`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    }
  );

  if (response) {
    localStorage.setItem("user", JSON.stringify(response));
  }

  return response;
}
