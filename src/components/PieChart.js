import React, { Component, useState, useEffect } from "react";
import Chart from "react-apexcharts";

<<<<<<< HEAD
class PieChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            series: [props.data.beds_occupied, 12, 8],
            options: {
                chart: {
                    width: 380,
                    type: "pie",
                },
                labels: ["Occupied", "Unoccuppied", "Reserved"],

                title: {
                    text: props.data.name,
                    align: "left",
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: "25px",
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                }, ],
            },

        };

    }

    render() {
        return ( < div id = "chart" >
            <
            Chart options = { this.state.options }
            series = { this.state.series }
            type = "pie"
            width = { 380 }
            /> < /
            div >
        );
    }
=======
function PieChart({ data: newData }) {
  
  const [data, setData] = useState(newData);
  const options = {
    series: [data.occupiedBeds, data.totalBeds - data.occupiedBeds - data.reservedBeds, data.reservedBeds],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Occupied", "Unoccuppied", "Reserved"],

      title: {
        text: data.name,
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

 
  useEffect(() => {
    setData(newData);
  }, [newData]);

  return (
    <div id="chart">
      <Chart
        options={options.options}
        series={options.series}
        type="pie"
        width={380}
      />
    </div>
  );
>>>>>>> 5e9dd081c6dbfac8287fd9b060e73b9ea9c6e602
}

export default PieChart;