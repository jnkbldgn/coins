import { OKX_HOST, OKX_BASE_URL } from '../../constants.js';
import { fetchJSON } from '../../utils/fetcher.js'

const getOkexUrl = (add) => new URL(OKX_HOST + OKX_BASE_URL + add);


export const fetchInstrument = (instrumentType) => {
  const url = getOkexUrl('instruments');

  url.searchParams.append('instType', instrumentType);

  return fetchJSON.get(url);
}
