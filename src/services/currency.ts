import { api } from './api';
import CoinInterface from '../interfaces/Coin.interface';

export const getCoins = async ():Promise<CoinInterface[]> => {
  const _URL = `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL`
  const { data } = await api.get(_URL);
  console.log(data)
  const coinsObject = data
  const coins = Object.values(coinsObject);

  return coins as CoinInterface[];
}