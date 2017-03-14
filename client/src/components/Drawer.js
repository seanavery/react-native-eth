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
      <DrawerNavigation>
        <DrawerNavigationItem>
        </DrawerNavigationItem>
      </DrawerNavigation>
    )
  }
}
