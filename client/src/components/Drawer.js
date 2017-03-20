import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';

export default class Drawer extends Component {

  render() {
    return (
      <DrawerNavigation style={{flex: 1, flexDirection: 'column'}}>
        <DrawerNavigationItem style={{flex: 1, flexDirection: 'row', backgroundColor: 'grey', height: '50%'}}>
          <Text>Wallet</Text>
        </DrawerNavigationItem>
        <DrawerNavigationItem style={{flex: 1, flexDirection: 'row'}}>
          <Text>Markets</Text>
        </DrawerNavigationItem>
      </DrawerNavigation>
    )
  }
}
