import React, { Component } from 'react';
import {
  View,
  Text,
  ART,
} from 'react-native';

// import * as d3 from 'd3';

var data = [
    {"number":  8, "name": 'Fun activities'},
    {"number": 7, "name": 'Dog'},
    {"number": 16, "name": 'Food'},
    {"number": 23, "name": 'Car'},
    {"number": 42, "name": 'Rent'},
    {"number":  4, "name": 'Misc'},
  ];

export default class Pie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View width=300 height=300>
        <Text>Pie Chart </Text>
      </View>
    );
  }
}
