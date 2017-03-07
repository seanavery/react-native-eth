import React, { Component} from 'react';
import { Router } from '../../index.ios.js';

import {
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class Landing extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Landing',
    }
  }

  constructor(props) {
    super(props)
  }

  _toMain = () => {
    console.log('navigator', this.props.navigator)
    console.log('Router', Router)
    this.props.navigator.push(Router.getRoute('portfolio'));
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <TouchableHighlight onPress={this._toMain}>
          <Image  source={require('../../assets/geo_logo.png')} />
        </TouchableHighlight>
      </View>
    )
  }
}

class Main extends Component {
  static route = {
    navigationBar: {
      title: 'Main',
    }
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}
