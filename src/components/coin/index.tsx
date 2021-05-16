import CoinInterface from '../../interfaces/Coin.interface';

const Coin: React.FC<CoinInterface> = ({ name, ask }) => (
  <div>
    <div>{name}</div>
    <div>{ask}</div>
  </div>
);

export default Coin;
