import React, { Component } from 'react';
import {
  View,
  Slider,
  Text,
} from 'react-native';

import { Router } from '../../index.ios.js';

export default class TradeForm extends Component {
  state = {
    gbp_amount: 0,
    ue_amount: 0,
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: '100%', height: '33%', }}>
          <Text>
            20 UE
          </Text>
        </View>
        <View style={{width: '100%', height: '33%', }}>
          <Text>
            3.45 GBP
          </Text>
        </View>
        <View style={{width: '100%', height: '33%', }}>
          <Slider />
        </View>
      </View>
    )
  }
}
