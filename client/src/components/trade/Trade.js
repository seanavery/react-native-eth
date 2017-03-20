import React, { Component} from 'react';
import { Router } from '../../../index.ios.js';

import {
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';

import { Button } from 'react-native-elements';

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
        <View style={{width: '100%', height: '90%', backgroundColor: 'white'}}>
          <Text style={{fontSize: 24}}> Sell yo shit </Text>
          <Image  source={require('../../../assets/doge_yawn.jpg')} />
        </View>
        <View style={{flex: 1, width: '100%', height: '10%', flexDirection: 'row' }}>
          <View style={{flex:1 , width:'50%', height:'100%'}}>
            <Button
              title='Buy UE'
              onPress={this.handleSell}
              raised={true}
              buttonSytle={{width:'100%', height:'100%'}}
              backgroundColor='skyblue'
            />
          </View>
          <View style={{flex:1 , width:'50%', height:'100%'}}>
            <Button
              title='Sell UE'
              raised={true}
              onPress={this.handleSell}
              backgroundColor='steelblue'
            />
          </View>
        </View>
      </View>
    )
  }
}
