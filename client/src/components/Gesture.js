import React, { Component } from 'react';
import { Viw, Text } from 'react-native';
import GestureRecognizer, { swipeDirection } from 'react-native-swipe-gestures';
import { Router } from '../Router';
import { Drawer } from './index';

export default class Gesture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white',
      gestureName: ''
    };
  }

  onSwipe(gestureName, gestureState) {
    console.log('swipe recognized', gestureName);
    switch (gestureName) {
      case 'SWIPE_DOWN':
        this.setState({gestureName: 'Down'});
        break;
      case 'SWIPE_UP':
        this.setState({gestureName: 'Up'});
        break;
      case 'SWIPE_LEFT':
        this.setState({gestureName: 'Left'});
        break;
      case 'SWIPE_RIGHT':
        this.setState({gestureName: 'Right'});
        break;
      default:
        break;
    }

  }
  render() {
    const config = {
      velocityThreshold: 0.1,
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
    );
  }
}
