import { createRouter } from '@exponent/ex-navigation';

// import Landing from './components/index';
import Landing from './components/Landing';

console.log('Landing(router)', Landing);

export const Router = createRouter(() => ({
  landing: () => Landing
}));
