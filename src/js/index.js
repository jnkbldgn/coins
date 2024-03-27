import { fetchInstrument } from './exchange/okx/api.js';
import { mapOkxCoinToTradingview } from './exchange/okx/utils/mappers.js';
import { downloadFile } from './utils/files.js';

const okxSpotOnClick = async () => {
  const response = await fetchInstrument('SPOT');

  const data = mapOkxCoinToTradingview(response.data, 'USDT');

  downloadFile('OKX-SPOT.txt', data);
}

const okxFututresOnClick = async () => {
  const response = await fetchInstrument('MARGIN');

  const data = mapOkxCoinToTradingview(response.data, 'USDT');

  downloadFile('OKX-FUTURES.txt', data);
}

const okxSpotBtn = document.querySelector('.okx-spot');
const okxFuturesBtn = document.querySelector('.okx-futures');

okxSpotBtn.addEventListener('click', () => okxSpotOnClick());
okxFuturesBtn.addEventListener('click', () => okxFututresOnClick());
