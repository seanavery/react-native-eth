import React, { Component } from 'react';
import Market from './Market';

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
        <Market />

        <Market />

        <Market />

      </ScrollView>
    )
  }
}
