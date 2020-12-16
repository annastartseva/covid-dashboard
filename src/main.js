import getDataForGlobalTable from './globalTable';

// Table Global Case
const buttonSummaryAllPeriod = document.querySelector('.button__all-period');
const buttonSummaryToday = document.querySelector('.button__last-day');
// const buttonSummaryAbs = document.querySelector('.button__abs button');
// const buttonSummaryPerPopulation = document.querySelector('.button__per-population');
const totalConfirmed = document.querySelector('#total_confirm');
const totalRecover = document.querySelector('#total_recover');
const totalDeaths = document.querySelector('#total_deaths');

// const url
const urlSummary = 'https://api.covid19api.com/summary';

// data from API
let data = '';

let setDataToTableGlobal = '';

async function getSummaryGlobalData(urlData) {
  console.log('function getSummaryGlobalData');
  const url = urlData;
  const res = await fetch(url);
  data = await res.json();
  console.log('TotalConfirmed: ', data.Global.TotalConfirmed);
  console.log('TotalDeaths: ', data.Global.TotalDeaths);
  console.log('TotalRecovered: ', data.Global.TotalRecovered);
  setDataToTableGlobal();
}

// first page load
const firstPageLoad = () => {
  getSummaryGlobalData(urlSummary);
};

setDataToTableGlobal = () => {
  getDataForGlobalTable(totalConfirmed, totalRecover, totalDeaths, data);
};

// Listener
buttonSummaryAllPeriod.addEventListener('click', () => {
  buttonSummaryAllPeriod.classList.add('select');
  buttonSummaryToday.classList.remove('select');
  getSummaryGlobalData(urlSummary);
});

buttonSummaryToday.addEventListener('click', () => {
  buttonSummaryAllPeriod.classList.remove('select');
  buttonSummaryToday.classList.add('select');
  getSummaryGlobalData(urlSummary);
});

firstPageLoad();
