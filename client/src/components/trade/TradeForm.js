import React, { Component } from 'react';
import {
  View,
  Slider,
  Text,
  TouchableHighlight,
  } from 'react-native';
import Chart from 'react-native-chart';
import { Button } from 'react-native-elements';



export default class TradeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ue_amount: 0,
      gbp_amount: 0,
      price: .75
    }
    this.handleOrder = this.handleOrder.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleOrder() {
    console.log('this.state is', this.state)
    fetch('http://localhost:6000/submitBuy', {
      method: 'Post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ue: this.state.ex
      })
    });
  }

  handleSliderChange(e) {
    const temp = e*100;
    const conv_val = this.rounding(temp, 2);
    const gbp_temp = conv_val*.3
    const gbp_val = this.rounding(gbp_temp, 2)

    this.setState({ue_amount: conv_val});
    this.setState({gbp_amount: gbp_val});
  }

  rounding(val, places) {
    const multiplier = Math.pow(10, places);
    return Math.round(val * multiplier) / multiplier
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'lightgrey'}}>
        <View style={{width: '100%', height: '33%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style ={{
              textAlign: 'center',
              color: 'darkgrey',
              fontSize: 50,
              fontFamily: 'Helvetica'
            }}>
              {this.state.ue_amount} UE
            </Text>
          </View>
        </View>
        <View style={{width: '100%', height: '33%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style ={{
              textAlign: 'center',
              color: 'darkgrey',
              fontSize: 50,
              fontFamily: 'Helvetica'
            }}>
              {this.state.gbp_amount} GBP
            </Text>
          </View>
        </View>
        <View style={{width: '100%', height: '33%', }}>
          <View style={{ paddingLeft: 10, paddingRight: 10, height: '50%'}}>
            <Slider
              onValueChange={this.handleSliderChange}
              onSlidingComplete={this.handleSliderComplete}
            />
          </View>
          <View style={{backgroundColor: 'darkgrey', height:'50%'}}>
            <TouchableHighlight onPress={this.handleOrder} style={{flex: 1, flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%'}}>
              <View style={{flex: 1, alignItems: 'center'}}>

              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
