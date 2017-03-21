import React, { Component } from 'react';
import {
  View,
  ART
} from 'react-native';

const {
  Surface,
  Group,
  Shape
} = ART;

export default class LineChart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View height={300} width={300}>
        <Surface width={300} height={300}>
          <Group x={0} y={0}>
            <Shape
              d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
              stroke="#000"
              strokeWidth={1}
            />
          </Group>
        </Surface>
      </View>
    )
  }
}
