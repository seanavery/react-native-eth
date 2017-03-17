import { createRouter } from '@exponent/ex-navigation';

import {
  Landing,
  Markets,
  Market
} from './components/index';

export const Router = createRouter(() => ({
  landing: () => Landing,
  markets: () => Markets,
  markert: () => Market,
}));
