import CoinInterface from '../interfaces/Coin.interface';
import Coin from '../components/coin';
import { useEffect, useState } from 'react';
import { getCoins } from '../services/currency';

const Home: React.FC = () => {
  const [coins, setCoins] = useState<CoinInterface[]>();

  useEffect(() => {
    async function loadCoins() {
      const result = await getCoins();
      setCoins(result);
    }
    loadCoins();
  }, []);

  return (
    <div>
      <h1>My Online Desktop</h1>
      {coins &&
        coins.map((coin: CoinInterface) => <Coin key={coin.code} {...coin} />)}
    </div>
  );
};

export default Home;
