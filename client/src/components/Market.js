import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

export default class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Image source={require('../../assets/geo_logo.png')} />
    )
  }
}
