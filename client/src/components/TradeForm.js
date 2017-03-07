import React, { Component } from 'react';
import {
  View,
  Slider,
  Text,
  Button,
} from 'react-native';

import { Router } from '../../index.ios.js';

export default class TradeForm extends Component {
  state = {
    gbp_amount: 0,
    ue_amount: 0,
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'lightgrey'}}>
        <View style={{width: '100%', height: '33%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View>
          </View>
          <Text style ={{textAlign: 'center'}}>
            20 UE
          </Text>
        </View>
        <View style={{width: '100%', height: '33%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text>
            3.45 GBP
          </Text>
        </View>
        <View style={{width: '100%', height: '33%', }}>
          <Slider />
          <Button title="submit order" style={{backgroundColor: 'darkgrey', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          </Button>
        </View>
      </View>
    )
  }
}
