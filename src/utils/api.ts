export const api = async <T,>(url: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: "Bearer " + localStorage.getItem("accessToken")
      }
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const jsonResponse = await response.json();
    return jsonResponse.data
  } catch (error) {
    throw error;
  }
};
