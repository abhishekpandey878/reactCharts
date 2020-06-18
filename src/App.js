import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Linechart';

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
                    617954, 181045, 153060, 106519, 105162, 95072
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
      <div className="App">
        <h2>React Charts</h2>
        <Chart chartData = {this.state.chartData} />
      </div>
    );
  }
}

export default App;
