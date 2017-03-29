import * as scale from 'd3-scale';
import * as shape form 'd3-shape';
import * as d3Array from 'd3-array';

const d3 = {
  scale,
  shape,
};

export function createLineGraph ({
  data,
  width,
  height,
}) {
  // get last data item in array
  const last_datum = data[data.length - 1];

  // create x-scale
  const scale_x = createScaleX(
    data[0].time,
    last_datum.time,
    width
  );

  // get all y values
  const extent_y = d3Array.extent(allYValues);

  // create y-scale
  const scale_y = createScaleY(extent_y[0], extent_y[1], height);
  
}
