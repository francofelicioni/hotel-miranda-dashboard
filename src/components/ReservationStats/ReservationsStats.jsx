import * as d3 from "d3";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

import { colors } from "../../styles/colors";

const StatsContainer = styled.div`
  max-width: 600px;
  flex: 1;
  background-color: var(--color-white);
  margin-top: 50px;
  border-radius: 20px;
  display: flex;
  overflow: auto;
  padding: 40px;
  position: relative;
  box-shadow: 0px 5px 8px #00000028;
  :hover {
    box-shadow: 0px 7px 20px #00000048;
  }
  .hoverBar {
    fill: var(--color-grey39);
  }
`;
const InfoContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  display: flex;
  margin-top: 30px;
  margin-right: 60px;
`;

const Info = styled.div`
  display: flex;
  margin-right: 20px;
`;

const Color = styled.div`
  width: 10px;
  height: 10px;
  margin-top: 8px;
  margin-right: 8px;
  background-color: ${(props) => props.color};
`;

function ReservationsStats() {
  const styleSVG = {
    margin: "0 auto",
  };

  const svgRef = useRef();
  // const [data] = useState([10, 20, 30, 40, 50, 60]);
  // const [data2] = useState([90, 80, 40, 20, 30, 70]);
  const [data] = useState([
    {
      day: "Friday",
      sales: 1000,
      occupancy: 1400,
    },
    {
      day: "Saturday",
      sales: 2345,
      occupancy: 1500,
    },
    {
      day: "Sunday",
      sales: 3422,
      occupancy: 3300,
    },
    {
      day: "Monday",
      sales: 2300,
      occupancy: 2000,
    },
    {
      day: "Tuesday",
      sales: 1450,
      occupancy: 1100,
    },
    {
      day: "Wednesday",
      sales: 2130,
      occupancy: 2200,
    },
    {
      day: "Thursday",
      sales: 1200,
      occupancy: 1100,
    },
  ]);

  useEffect(() => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const w = 400;
    const h = 400;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .attr("color", colors.gray)
      .attr("overflow", "visible")
      .style("margin", "auto auto");
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding([0.6]);
    const yScale = d3.scaleLinear().domain([0, 4000]).range([h, 0]);
    const yScaleR = d3.scaleLinear().domain([0, 100]).range([h, 0]);
    const yAxisL = d3.axisLeft(yScale).ticks(10);
    const yAxisR = d3.axisRight(yScaleR).ticks(10);
    const xAxis = d3.axisBottom(xScale);

    svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
    svg.append("g").call(yAxisL);
    svg.append("g").call(yAxisR).attr("transform", `translate(${w})`);

    svg
      .selectAll(".bar")
      .data(data.map((v, i) => v.sales))
      .join("rect")
      .attr("fill", colors.red)
      .attr("x", (val, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth() / 3)
      .attr("height", (val) => h - yScale(val));

    svg
      .selectAll(".bar")
      .data(data.map((v, i) => v.occupancy))
      .join("rect")
      .attr("fill", colors.green)
      .attr("x", (val, i) => xScale(i) + 20)
      .attr("y", yScale)
      .attr("width", xScale.bandwidth() / 3)
      .attr("height", (val) => h - yScale(val));
  }, [data]);

  return (
    <StatsContainer>
      <InfoContainer>
        <Info>
          <Color color="#e0564c" />
          Sales
        </Info>
        <Info>
          <Color color="#799283" />
          Ocuppancy
        </Info>
      </InfoContainer>
      <svg style={styleSVG} ref={svgRef}></svg>
    </StatsContainer>
  );
}
export default ReservationsStats;
