const headers = {
  'Access-Control-Allow-Credentials': '*',
};

export const fetchJSON = {
    async get(url) {
      const response = await fetch(url, { headers });
      return response.json();
    },
};
