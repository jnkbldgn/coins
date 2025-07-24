const filterCoin = (coin, currency) => coin.status === 'Trading' && (!currency || coin.quoteCoin === currency);

export const mapBybitCoinSpotToTradingview = (data, currency) => {
  return data.result.list
    .filter((coin) => filterCoin(coin, currency))
    .map((coin) => 'BYBIT:' + coin.symbol)
    .join(',');
  }

  export const mapBybitCoinSwapToTradingview = (data, currency) => {
    return data.result.list
    .filter((coin) => filterCoin(coin, currency))
    .map((coin) => 'BYBIT:' + coin.symbol + '.P')
    .join(',');
}

