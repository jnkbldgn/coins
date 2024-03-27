export const mapOkxCoinToTradingview = (data, to) => {
  return data
    .filter((coin) => coin.state === 'live' && (!to || coin.quoteCcy === to))
    .map((coin) => 'OKX:' + coin.instId.replace('-', ''))
    .join(',');
}

