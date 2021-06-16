const API_URL = process.env.REACT_APP_FLIP_GATEWAY_URL || 'https://nextar.flip.id';
const api = async <T>(url: string): Promise<T> => {
  const endpoint = `${API_URL}${url}`;
  return fetch(endpoint).then((response) => {
    if (response.ok) {
      const json = response.json();
      return json;
    }
    throw new Error('Something went wrong...');
  });
};

export default api;
