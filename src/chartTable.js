import Chart from 'chart.js';

const ctx = document.getElementById('myChart').getContext('2d');
const config = {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1,			
    }]
  },
  options: {
    legend: {
      display: true,
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      }
    },
    tooltips: {
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return {
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgb(255, 0, 0)'
          };
        },
        labelTextColor: function(tooltipItem, chart) {
          return '#543453';
        }
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

const createChart = (outputData) => {
  outputData.forEach((element) => {
    config.data.labels.push(new Date(element[0]).toLocaleDateString());
    config.data.datasets[0].data.push(element[1]);
    config.data.datasets[0].label = 'Global';
  });
  console.log(config.data.labels[0]);
  const myChart = new Chart(ctx, config);
}



// config.data.datasets[0].backgroundColor = 'blue';

document.querySelector('.button__recovered-chart').addEventListener('click', () => myChart.update());

console.log(config);

export { createChart };
