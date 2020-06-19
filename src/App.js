import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Linechart';
import Line from './components/Line';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ['Mumbai', 'Pune', 'Hyderabad', 'Bangalore', 'Ahmedabad', 'Calcutta'],
        datasets: [
            {
                label: 'Populations',
                data: [
                    33, 27, 39, 43, 52, 59
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ]
            }
        ]
    }
    });
  }

  render() {
    return(
      <div>
        <div className="App">
        <h2>React Charts</h2>
        <Chart chartData = {this.state.chartData} />
        
      </div>
      <div align="center">
        <h2>Simple line chart</h2>
        <Line />
      </div>
      </div>
    );
  }
}

export default App;
