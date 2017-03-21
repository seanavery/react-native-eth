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

import mock_data from './graph-utils/mock-data';
import { createLineGraph } from './graph-utils/line-graph-lib.js';

export default class LineChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const size = 300;
    const data = createLineGraph({
      data: mock_data,
      width: size,
      height: size,
      xAccessor: d => new Date(d.time*1000),
      yAccessor: d => d.temperatureMax
    })
    return(
      <View height={300} width={300}>
        <Surface width={300} height={300}>
          <Group x={0} y={0}>
            <Shape
              d={data.path}
              stroke="#000"
              strokeWidth={1}
            />
          </Group>
        </Surface>
      </View>
    )
  }
}
