import { createRouter } from '@exponent/ex-navigation';


export const Router = createRouter(() => ({
  trade: () => Trade,
  tradeform: () => TradeForm,
}));
