import Chart from 'chart.js';
import { state } from './main';

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }],
  },
  options: {
    legend: {
      display: true,
      labels: {
        fontColor: 'rgb(255, 99, 132)',
        fillStyle: 'blue',
      },
    },
    tooltips: {
      callbacks: {
        labelColor: function () {
          return {
            borderColor: 'rgb(0, 255, 55)',
            backgroundColor: 'rgb(0, 255, 55)',
          };
        },
        labelTextColor: function () {
          return '#543453';
        },
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: (value) => `${value / 10e6}M`,
        },
      }],
      xAxes: [{
        type: 'time',
        time: {
          unit: 'month'
        }
      }],
    },
  },
});
const createChart = (outputData) => {

  myChart.config.data.labels = [];
  myChart.config.data.datasets[0].data = [];
  myChart.config.data.datasets[0].label = '';

  state.countryNameForChart === null ? myChart.config.data.datasets[0].label = 'Global' : myChart.config.data.datasets[0].label = state.countryNameForChart;

  if (state.recovered === true) {
    myChart.config.data.datasets[0].backgroundColor = 'rgba(8, 171, 0, 0.2)';
    myChart.config.data.datasets[0].borderColor = 'rgba(8, 171, 0, 1)';
    myChart.options.legend.labels.fontColor = 'rgba(8, 171, 0, 1)';
  } else if (state.deaths === true) {
    myChart.config.data.datasets[0].backgroundColor = 'rgba(160, 4, 4, 0.2)';
    myChart.config.data.datasets[0].borderColor = 'rgba(160, 4, 4, 1)';
    myChart.options.legend.labels.fontColor = 'rgba(160, 4, 4, 1)';
  } else if (state.consfirmed === true) {
    myChart.config.data.datasets[0].backgroundColor = 'rgba(255, 99, 132, 0.2)';
    myChart.config.data.datasets[0].borderColor = 'rgba(255, 99, 132, 1)';
    myChart.options.legend.labels.fontColor = 'rgba(255, 99, 132, 1)';
  }

  outputData.forEach((element) => {
    myChart.config.data.labels.push(new Date(element[0]).toLocaleDateString());
    myChart.config.data.datasets[0].data.push(element[1]);
  });

  myChart.update();
};

export { createChart, myChart };
