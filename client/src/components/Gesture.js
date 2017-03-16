import React, { Component } from 'react';
import { Viw, Text } from 'react-native';
import GestureRecognizer, { swipeDirection } from 'react-native-swipe-gestures';

export default class Gesture extens Component {
  constructor(props) {
    this.state = {
      backgroundColor: 'white',
      gestureName: ''
    };
  }
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <GestureRecognizer
        onSwipe={ (direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
      >
        <Text>Recieved gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
  }
}
