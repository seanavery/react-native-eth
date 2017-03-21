import React, { Component} from 'react';
import { Router } from '../Router';

import {
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

import GestureRecognizer, { swipeDirection } from 'react-native-swipe-gestures';

export default class Landing extends React.Component {
  static route = {
    navigationBar: {
      title: 'Landing',
    }
  }

  constructor(props) {
    super(props)
  }

  _toMain = () => {
    this.props.navigator.push(Router.getRoute('markets'));
  }

  render() {
    console.log('rendering landing')
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <TouchableHighlight onPress={this._toMain}>
          <Image  source={require('../../assets/geo_logo.png')} />
        </TouchableHighlight>
      </View>
    )
  }
}
