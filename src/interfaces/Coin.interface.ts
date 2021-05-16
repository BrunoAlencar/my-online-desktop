import { InputHTMLAttributes } from 'react';

export default interface CoinInterface extends InputHTMLAttributes<HTMLInputElement> {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: Date;
  create_date: Date;
}