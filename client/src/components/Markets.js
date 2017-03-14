import React, { Component } from 'react';

import {
  View,
  ScrollView,
  Image,
} from 'react-native';

export default class Markets extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <ScrollView>
        <Image source={require('../../assets/geo_logo.png')} />

        <Image source={require('../../assets/geo_logo.png')} />

        <Image source={require('../../assets/geo_logo.png')} />

      </ScrollView>
    )
  }
}
