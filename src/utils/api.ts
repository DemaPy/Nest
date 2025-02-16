export const api = async (url: string, options?: any) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const jsonResponse = await response.json();
    return jsonResponse.data
  } catch (error) {
    throw error;
  }
};
