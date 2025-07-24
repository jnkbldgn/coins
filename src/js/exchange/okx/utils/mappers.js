export const mapOkxCoinSpotToTradingview = (data, currency) => {
  return data.data
    .filter((coin) => coin.state === 'live' && (!currency || coin.quoteCcy === currency))
    .map((coin) => 'OKX:' + coin.instId.replace('-', ''))
    .join(',');
}

export const mapOkxCoinSwapToTradingview = (data, currency) => {
  return data.data
    .filter((coin) => coin.state === 'live' && (!currency || coin.settleCcy === currency))
    .map((coin) => 'OKX:' + coin.instFamily.replace('-', '') + '.P')
    .join(',');
}

