import { OKX_HOST, OKX_BASE_URL } from '../../variables.js';

const getOkexUrl = (add) => new URL(OKX_HOST + OKX_BASE_URL + add);

const headers = {
  'Access-Control-Allow-Credentials': '*',
};

export const fetchInstrument = async (instrumentType) => {
  const url = getOkexUrl('instruments');

  url.searchParams.append('instType', instrumentType);

  const response = await fetch(url, { headers });

  return response.json();
}
