import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart from "./components/Linechart";
import Line from "./components/Line";
import Formatters from "./components/Formatchart";
import ProgressBar from "./components/ProgressBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.state = {
      chartData: {},
      percentage: 50,
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "Mumbai",
          "Pune",
          "Hyderabad",
          "Bangalore",
          "Ahmedabad",
          "Calcutta",
        ],
        datasets: [
          {
            label: "Populations",
            data: [33, 27, 39, 43, 52, 59],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    });
  }

  onIncrease() {
    this.setState({ percentage: this.state.percentage + 10 });
  }

  onDecrease() {
    this.setState({ percentage: this.state.percentage - 10 });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Progress Bar</h2>
          <ProgressBar percentage={this.state.percentage} />
          <button onClick={this.onIncrease}>+</button>
          <button onClick={this.onDecrease}>-</button>
        </div>

        <div className="App">
          <h2>React Charts</h2>
          <Chart chartData={this.state.chartData} />
        </div>

        <div align="center">
          <h2>Simple line chart</h2>
          <Line />

          <h2>Table Chart</h2>
          <Formatters />
        </div>
      </div>
    );
  }
}

export default App;
