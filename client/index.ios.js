import React, { Component } from 'react';
import Navigation from './src/components/Navigation';
import { Router } from './src/Router';
import { Provider, connect } from 'react-redux';
import store from './src/store';
// import Drawer from './src/components/Drawer';
// import Landing from './src/components/index';
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


/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */

class App extends Component {
  render() {
    console.log('Navigation(index.ios)', Navigation);
    /**
      * NavigationProvider is only needed at the top level of the app,
      * similar to react-redux's Provider component. It passes down
      * navigation objects and functions through context to children.
      *
      * StackNavigation represents a single stack of screen
    */

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

// const mapStoreToProps = (store) => {
//   let mappedProps = new Object();
//   mappedProps.navigation = store.navigation;
//   return mappedProps;
// }
//
// const App = connect(mapStoreToProps)(AppComponent);

AppRegistry.registerComponent('client', () => App);
