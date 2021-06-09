import React, { Component } from "react";

import Chart from "react-apexcharts";

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [67, 33],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Occupied", "Unoccupied"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }



  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="380"
        />
        <button onClick={this.onClick}>Horizontal</button>
      </>
    );
  }
}

export default PopChart;
