import { createRouter } from '@exponent/ex-navigation';

import { Landing } from './components/index';
import { Markets } from './components/index';

export const Router = createRouter(() => ({
  landing: () => Landing,
  markets: () => Markets
}));
