import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

import { Router } from '../../index.ios.js';

export default class Trade extends Component {
  handleSell() {

  }

  handleBuy() {

  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableHighlight onPress={this.handleBuy}>
          <View style={{width: '100%', height: '50%', backgroundColor: 'lightgrey'}}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                flex: 1,
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                fontSize: 50,
                textAlign: 'center',
              }}>
                BUY UE
              </Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.handleSell}>
          <View style={{width: '100%', height: '50%', backgroundColor: 'darkgrey'}}>
            <View style={{flex: 1,
              flexDirection: 'row',
              alignItems: 'center'}}>
              <Text style={{
                flex: 1,
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                fontSize: 50,
                textAlign: 'center'
              }}>
                SELL UE
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
