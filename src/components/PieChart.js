import React, { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [24, 56, 10],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Occupied", "Unoccuppied", "Reserved"],
        
        title: {
          text: "H1",
          align: "left",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
          },
        },
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
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={380}
        />
      </div>
    );
  }
}

export default PieChart;
