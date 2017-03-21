import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-shape';

const d3 = {
  scale,
  shape
}

export function createLineGraph({
  data,
  xAccessor,
  yAccessor,
  width,
  height,
}) {
  const lastDatum = data[data.length - 1];
  console.log('data', data);
  console.log('lastDatum', lastDatum);
  const scaleX = d3.scale.scaleTime()
    .domain([new Date(data[0].time * 1000), new Date(lastDatum.time * 1000)])
    .range([0, width])

  const allYValues = data.reduce((all, datum) => {
    all.push(yAccessor(datum));
    return all;
  }, []);

  const extenY = d3Array.extent(allYValues);
  const scaleY = d3.scale.scaleLinear()
    .domain([extenY[0], extenY[1]]).nice()
    .range([height, 0]);

  const lineShape = d3.shape.line()
    .x(d=> scaleX(xAccessor(d)))
    .y(d=> scaleY(yAccessor(d)));

  return {
    path: lineShape(data)
  }
}
