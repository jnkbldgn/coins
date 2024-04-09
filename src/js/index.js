import { fetchInstrument } from './exchange/okx/api.js';
import { mapOkxCoinSpotToTradingview, mapOkxCoinSwapToTradingview } from './exchange/okx/utils/mappers.js';
import { downloadFile } from './utils/files.js';

const okxSpotBtn = document.querySelector('.okx-spot');
const okxFuturesBtn = document.querySelector('.okx-futures');
const okxSource = document.querySelector('.okx-source');

const okxLoadSpotSource = async (elem) => {
  const response = await fetchInstrument('SPOT');

  const data = mapOkxCoinSpotToTradingview(response.data, 'USDT');

  elem.innerHTML = data;
}

const okxLoadSwapSource = async (elem) => {
  const response = await fetchInstrument('SWAP');

  const data = mapOkxCoinSwapToTradingview(response.data, 'USDT');

  elem.innerHTML = data;
}


okxSpotBtn.addEventListener('click', async function() {
  this.toggleAttribute('disabled');

  try {
    await okxLoadSpotSource(okxSource)

    okxFuturesBtn.removeAttribute('disabled');
  } catch {
    this.toggleAttribute('disabled');
  }

});

okxFuturesBtn.addEventListener('click', async function() {
  this.toggleAttribute('disabled');

  try {
    await okxLoadSwapSource(okxSource);

    okxSpotBtn.removeAttribute('disabled');
  } catch {
    this.toggleAttribute('disabled');
  }

});
