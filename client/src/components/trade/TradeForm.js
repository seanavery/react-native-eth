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
    const data = [[
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
]];
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'lightgrey'}}>
        <View style={{width: '100%', height: '70%', flex:1 }}>
          <Chart
            data={data}
            verticalGridStep={5}
            type="line"
            showDataPoint={true}
          />
        </View>
        <View style={{width: '100%', height: '5%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, width: '50%', height: '100%'}}>
            <Text style ={{
              textAlign: 'center',
              color: 'darkgrey',
              fontSize: 28,
              fontFamily: 'Helvetica'
            }}>{this.state.ue_amount} UE</Text>
          </View>
          <View style={{flex: 1, width: '50%', height: '100%'}}>
            <Text style ={{
              textAlign: 'center',
              color: 'darkgrey',
              fontSize: 28,
              fontFamily: 'Helvetica'
            }}>{this.state.gbp_amount} GBP</Text>
          </View>
        </View>
        <View style={{width: '100%', height: '5%', flex: 1 }}>
          <Slider
            onValueChange={this.handleSliderChange}
            onSlidingComplete={this.handleSliderComplete}
          />
        </View>
        <View style={{backgroundColor: 'darkgrey', height:'10%', width: '100%'}}>
          <Button
            title='Submit'
            onPress={this.handleOrder}
            raised={true}
            buttonSytle={{width:'100%', height:'100%'}}
            backgroundColor='skyblue'
          />
        </View>
      </View>
    )
  }
}
