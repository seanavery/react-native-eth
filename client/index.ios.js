import React, { Component } from 'react';
import { Router } from './src/Router';
// import Drawer from './src/components/Drawer';
import Landing from './src/components/index';
// import Trade from './src/components/Trade';
// import TradeForm from './src/components/TradeForm';
// import Drawer from './src/components/Drawer';
// import Markets from './src/components/Markets';

import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

/**
 * If you're using Exponent, uncomment the line below to import Exponent
 * BEFORE importing `@exponent/ex-navigation`. This sets the status bar
 * offsets properly.
 */
// import Exponent from 'exponent';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */
// export const Router = createRouter(() => ({
//   landing: () => Landing,
//   trade: () => Trade,
//   tradeform: () => TradeForm,
//   markets: () => Markets
// }));

class App extends React.Component {
  render() {
    /**
      * NavigationProvider is only needed at the top level of the app,
      * similar to react-redux's Provider component. It passes down
      * navigation objects and functions through context to children.
      *
      * StackNavigation represents a single stack of screen
    */
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#a8a8a8',
              tintColor: '#fff',
            }
          }}
          initialRoute={Router.getRoute('landing')}
        />

      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('client', () => App);
