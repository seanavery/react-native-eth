import React, { Component} from 'react';
import { Router } from '../../index.ios.js';

import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

export default class Trade extends Component {
  static route = {
    navigationBar: {
      title: 'Trade',
    }
  }

  constructor(props) {
    super(props);
    this.state = {};

    this.handleSell = this.handleSell.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
  }

  handleSell() {
    this.props.navigator.push(Router.getRoute('tradeform'));
  }

  handleBuy() {
    this.props.navigator.push(Router.getRoute('tradeform'));
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: '100%', height: '50%', backgroundColor: 'lightgrey'}}>
          <TouchableHighlight onPress={this.handleSell} style={{flex: 1, flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%'}}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{
                fontFamily: 'helvetica',
                fontSize: 50,
                textAlign: 'center'
              }}>
              Buy UE
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{width: '100%', height: '50%', backgroundColor: 'darkgrey'}}>
          <TouchableHighlight onPress={this.handleSell} style={{flex: 1, flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%'}}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{
                fontFamily: 'helvetica',
                fontSize: 50,
                textAlign: 'center'
              }}>
              Sell UE
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
