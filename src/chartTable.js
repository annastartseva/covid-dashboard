import Chart from 'chart.js';

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
      },
    },
    tooltips: {
      callbacks: {
        labelColor: function () {
          return {
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgb(255, 0, 0)',
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

  outputData.forEach((element) => {
    myChart.config.data.labels.push(new Date(element[0]).toLocaleDateString());
    myChart.config.data.datasets[0].data.push(element[1]);
    myChart.config.data.datasets[0].label = 'Global';
  });

  myChart.update();
};

export { createChart, myChart };
