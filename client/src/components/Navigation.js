import React, { Component } from 'react';
import { Router } from '../Router';
import {
  NavigationProvider,
  StackNavigation
} from '@exponent/ex-navigation';

export default class Navigation extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#a8a8a8',
              tintColor: '#fff',
            }
          }}
          initialRoute={Router.getRoute('gesture')}
        />
      </NavigationProvider>
    )
  }
}
