import React, { useEffect } from "react";
import Styles from "./graph.module.css";
import * as d3 from "https://cdn.skypack.dev/d3@7";
import "https://cdn.skypack.dev/d3-scale@4";

const Graph = () => {
  const data = [
    { day: "22/5/2022", temp: 17 },
    { day: "23/5/2022", temp: 18 },
    { day: "24/5/2022", temp: 19 },
    { day: "25/5/2022", temp: 20 },
    { day: "26/5/2022", temp: 21 },
    { day: "27/5/2022", temp: 22 },
    { day: "28/5/2022", temp: 23 },
  ];

  const drawChart = (element) => {
    let temps_array = data.map((x) => x.temp);
    const xScale = d3
      .scaleBand()
      .domain(data.map((x) => x.day))
      .rangeRound([0, 200])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, Math.max(...temps_array)])
      .nice()
      .range([200, 0]);
    const container = d3.select(element).classed(Styles.graphContainer, true);

    const bars = container
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("width", xScale.bandwidth())
      .attr("height", (element) => 500 - yScale(element.temp))
      .attr("fill", "var(--clr-secondary)")
      .attr("x", (element) => xScale(element.day))
      .attr("y", (element) => yScale(element.temp));
  };

  //   useEffect(() => {
  //     drawChart();
  //   }, []);

  return <svg id="svg-div" ref={drawChart}></svg>;
};

export default Graph;
