import React from "react";
import Styles from "./graph.module.css";
import * as d3 from "https://cdn.skypack.dev/d3@7";
import "https://cdn.skypack.dev/d3-scale@4";

const Graph = ({ width, height }) => {
  const data = [
    { day: "22/5", temp: 17 },
    { day: "23/5", temp: 18 },
    { day: "24/5", temp: 19 },
    { day: "25/5", temp: 20 },
    { day: "26/5", temp: 21 },
    { day: "27/5", temp: 22 },
    { day: "28/5", temp: 23 },
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

    const svg = d3
      .select(element)
      .classed(Styles.graphContainer, true)
      // .attr("width", 150)
      // .attr("height", 150)
      .attr("viewBox", [0, 0, 200, 200]);

    svg
      .append("g")
      .attr("fill", "royalblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("width", xScale.bandwidth())
      .attr("height", (element) => yScale(0) - yScale(element.temp))
      .attr("x", (element) => xScale(element.day))
      .attr("y", (element) => yScale(element.temp));

    const xAxis = (g) => {
      g.attr("transform", "translate(0,200)")
        .call(d3.axisBottom(xScale).tickFormat((x, i) => data[i].day))
        .selectAll("g")
        .selectAll("text")
        .classed("xAxis", true)
        .attr("font-size", "4px")
        .attr("font-Family", "var(--ff-poppinsRegular)")
        .attr("fill", "var(--clr-black)");
    };

    svg.append("g").call(xAxis);

    const yAxis = (g) => {
      g.call(d3.axisLeft(yScale).ticks(null, data.format))
        .selectAll("g")
        .selectAll("text")
        .classed("yAxis", true)
        .attr("font-size", "4px")
        .attr("font-Family", "var(--ff-poppinsRegular)")
        .attr("fill", "var(--clr-black)");
    };

    svg.append("g").call(yAxis);
  };

  return <svg id="svg-div" ref={drawChart}></svg>;
};

export default Graph;
