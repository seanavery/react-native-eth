import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';

export default class Trade extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
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
      </View>
    )
  }
}
