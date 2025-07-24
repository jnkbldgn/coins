import { fetchInstrument } from './exchange/okx/api.js';
import { fetchInstrumentsInfo } from './exchange/bybit/api.js';
import { mapOkxCoinSpotToTradingview, mapOkxCoinSwapToTradingview } from './exchange/okx/utils/mappers.js';
import { mapBybitCoinSpotToTradingview, mapBybitCoinSwapToTradingview } from './exchange/bybit/utils/mappers.js';
import { downloadFile } from './utils/files.js';

const actions = {
  OKX: {
    SPOT: {
      fetchInstrument: () => fetchInstrument('SPOT'),
      mapper: (data) => mapOkxCoinSpotToTradingview(data, 'USDT')
    },
    FUTURES: {
      fetchInstrument: () => fetchInstrument('SWAP'),
      mapper: (data) => mapOkxCoinSwapToTradingview(data, 'USDT')
    },
  },
  BYBIT: {
    SPOT: {
      fetchInstrument: () => fetchInstrumentsInfo('spot'),
      mapper: (data) => mapBybitCoinSpotToTradingview(data, 'USDT')
    },
    FUTURES: {
      fetchInstrument: () => fetchInstrumentsInfo('linear'),
      mapper: (data) => mapBybitCoinSwapToTradingview(data, 'USDT')
    },
  }
}

const form = document.querySelector('.form');
const source = document.querySelector('.source');
const title = document.querySelector('.title');
const exchangeBtns = document.querySelectorAll('input[type="radio"][name="exchange"]');

Array.prototype.forEach.call(exchangeBtns, (el) => {
  if(el.checked) {
    title.innerHTML = el.value;
  }

  el.addEventListener('change', function() {
    source.innerHTML = '';

    if(this.checked) {
      title.innerHTML = this.value;
    }
  })
})

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const exchange = event.target.elements.exchange.value;
  const type = event.submitter.value;

  if (!exchange || !type) {
    return false;
  }

  const action = actions[exchange][type];
  const response = await action.fetchInstrument();
  source.innerHTML = action.mapper(response);

  return false
});
