import { createRouter } from '@exponent/ex-navigation';

import Landing from './components/index';

export const Router = createRouter(() => ({
  Landing: () => Landing;
}));
