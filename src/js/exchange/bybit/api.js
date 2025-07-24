import { BYBIT_HOST, BYBIT_BASE_URL } from '../../constants.js';
import { fetchJSON } from '../../utils/fetcher.js'

const getBybitUrl = (add) => new URL(BYBIT_HOST + BYBIT_BASE_URL + add);


export const fetchInstrumentsInfo = (instrumentType) => {
  const url = getBybitUrl('instruments-info');

  url.searchParams.append('category', instrumentType);
  url.searchParams.append('limit', 1000);

  return fetchJSON.get(url);
}
