import { createRouter } from '@exponent/ex-navigation';

import {
  Landing,
  Markets,
  Market,
  Gesture,
  Drawer
} from './components/index';

export const Router = createRouter(() => ({
  landing: () => Landing,
  markets: () => Markets,
  market: () => Market,
  gesture: () => Gesture,
  drawer: () => Drawer,
}));
