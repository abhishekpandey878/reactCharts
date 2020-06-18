import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom",
  };

  render() {
    return (
      <div className="chart">
        <h2>Bar Chart</h2>
        <Bar
          data={this.state.chartData}
          options={{
            responsive:true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
              display: this.props.displayTitle,
              text: "Largest Populations in India",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />

        <h2>Line Chart</h2>
        <Line
          data={this.state.chartData}
          options={{
            responsive:true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
              display: this.props.displayTitle,
              text: "Largest Populations in India",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />

        <h2>Pie Chart</h2>
        <Pie
          data={this.state.chartData}
          options={{
            responsive:true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
              display: this.props.displayTitle,
              text: "Largest Populations in India",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />

        <h2>Doughnut Chart</h2>
        <Doughnut
          data={this.state.chartData}
          options={{
            responsive:true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
              display: this.props.displayTitle,
              text: "Largest Populations in India",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
