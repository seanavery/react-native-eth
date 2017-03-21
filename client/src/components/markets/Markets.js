import React, { Component } from 'react';
import Market from './Market';
import { Router } from '../../Router';

console.log('Router', Router);

import {
  View,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';



export default class Markets extends React.Component {
  static route = {
    navigationBar: {
      title: 'Markets',
    }
  }

  constructor(props) {
    super(props);
    this.state = {}
    this.toMarket = this.toMarket.bind(this);
  }

  toMarket() {
    this.props.navigator.push(Router.getRoute('market'));
  }

  render() {
    return (
      <ScrollView>

        <TouchableHighlight onPress={this.toMarket}><View><Market /></View></TouchableHighlight>

        <TouchableHighlight onPress={this.toMarket}><View><Market /></View></TouchableHighlight>

        <TouchableHighlight onPress={this.toMarket}><View><Market /></View></TouchableHighlight>

      </ScrollView>
    )
  }
}
