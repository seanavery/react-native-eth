import React, { Component } from 'react';
import { View, Text } from 'react-native';
import GestureRecognizer, { swipeDirection } from 'react-native-swipe-gestures';
import { connect } from 'react-redux';
// import { Router } from '../Router';
import { Drawer } from './index';

class GestureComponent extends Component {
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
        const { dispatch } = this.props;
        console.log('dispatch', dispatch);
        dispatch({type: 'TOGGLE_DRAWER'});
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

const mapStoreToProps = (store) => {
  let mappedProps = new Object();
  mappedProps.navigation = store.navigation;
  return mappedProps;
}

const Gesture = connect(mapStoreToProps)(GestureComponent);

export default Gesture;
