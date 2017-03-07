import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import React, { Component } from 'react';

import Trade from './src/components/Trade'
import TradeForm from './src/components/TradeForm'

export const Router = createRouter(() => ({
  trade: () => Trade,
  tradeform: () => TradeForm,
}));

export default class client extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          initialRoute={Router.getRoute('trade')}
        />

      </NavigationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('client', () => client);
