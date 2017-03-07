import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';

export default class Trade extends Component {
  render() {
    return (
      <View style={{flex: 2, flexDirection: 'column'}}>
        <View style={{width: '100%', height: '50%', backgroundColor: 'lightgrey'}} />
        <View style={{width: '100%', height: '50%', backgroundColor: 'darkgrey'}} />
      </View>
    )
  }
}
