import React, { Component } from 'react';

import { ART } from 'react-native';

const {
  Group,
  Shape,
  Surface,
} = ART;

class LineChart extends Component {
  render() {
    <Surface width={200} height={100}>
      <Group x={0} y={0}>
        <Shape
          d={this.props.linePath}
          stroke="#000"
          strokeWidth={1}
        />
      </Group>
    </Surface>
  }
}
