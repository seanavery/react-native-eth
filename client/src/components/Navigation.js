import React, { Component } from 'react';
import { Router } from '../Router';
import { connect } from 'react-redux';
import store from '../store';
import { Drawer } from './index';
import {
  NavigationProvider,
  StackNavigation
} from '@exponent/ex-navigation';

class NavigationComponent extends Component {


  render() {
    const drawer = store.getState().navigation.drawer;
    console.log('drawer(navigation)', drawer);
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

      {drawer ? <Drawer /> : null}

      </NavigationProvider>
    )
  }
}

const mapStoreToProps = (store) => {
  let mappedProps = new Object();
  mappedProps.navigation = store.navigation;
  return mappedProps;
}

const Navigation =  connect(mapStoreToProps)(NavigationComponent);

export default Navigation;
