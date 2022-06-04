import React from "react";
import Styles from "./graph.module.css";
import * as d3 from "d3";
import "d3-scale";

const Graph = ({ width, height, data }) => {
  const drawChart = (element) => {
    let temps_array = data.map((x) => x.avgtempC);
    const xScale = d3
      .scaleBand()
      .domain(data.map((x) => x.date))
      .rangeRound([0, width])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, Math.max(...temps_array)])
      .nice()
      .range([height, 0]);

    const svg = d3
      .select(element)
      .classed(Styles.graphContainer, true)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    svg
      .append("g")
      .attr("fill", "#236D7C")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("width", xScale.bandwidth())
      .attr("height", (element) => yScale(0) - yScale(element.avgtempC))
      .attr("x", (element) => xScale(element.date))
      .attr("y", (element) => yScale(element.avgtempC));

    const xAxis = (g) => {
      g.attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale).tickFormat((x, i) => data[i].date))
        .selectAll("g")
        .selectAll("text")
        .classed("xAxis", true)
        .attr("font-size", "10px")
        .attr("font-Family", "var(--ff-poppinsRegular)")
        .attr("fill", "var(--clr-black)");
    };

    svg.append("g").call(xAxis);

    const yAxis = (g) => {
      g.call(d3.axisLeft(yScale).ticks(null, data.format))
        .selectAll("g")
        .selectAll("text")
        .classed("yAxis", true)
        .attr("font-size", "15px")
        .attr("font-Family", "var(--ff-poppinsRegular)")
        .attr("fill", "var(--clr-black)");
    };

    svg.append("g").call(yAxis);
  };

  return <svg id="svg-div" ref={drawChart}></svg>;
};

export default Graph;
