import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (data) {
      const svg = d3.select(svgRef.current);
      const margin = { top: 20, right: 30, bottom: 40, left: 40 };
      const width = 400 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const x = d3.scaleBand()
        .domain(Object.keys(data))
        .range([0, width])
        .padding(0.1);

      const y = d3.scaleLinear()
        .domain([0, d3.max(Object.values(data).map(group => group.length))])
        .nice()
        .range([height, 0]);

      const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      Object.keys(data).forEach(group => {
        const groupData = data[group];
        g.selectAll(`.bar-${group}`)
          .data(groupData)
          .enter()
          .append('rect')
          .attr('class', `bar bar-${group}`)
          .attr('x', () => x(group))
          .attr('y', item => y(groupData.indexOf(item) + 1))
          .attr('width', x.bandwidth())
          .attr('height', () => height - y(groupData.indexOf(groupData[groupData.length - 1]) + 1))
          .attr('fill', `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
      });

      g.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      g.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(y));
    }
  }, [data]);

  return (
    <svg ref={svgRef} width={400} height={300}></svg>
  );
};

export default BarChart;
