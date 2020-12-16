import getSummaryGlobalData from './main';

// Table Global Case
const buttonSummaryAllPeriod = document.querySelector('.button__all-period');
const buttonSummaryToday = document.querySelector('.button__last-day');
// const buttonSummaryAbs = document.querySelector('.button__abs button');
// const buttonSummaryPerPopulation = document.querySelector('.button__per-population');
const totalConfirmed = document.querySelector('#total_confirm');
const totalRecover = document.querySelector('#total_recover');
const totalDeaths = document.querySelector('#total_deaths');

const getDataForGlobalTable = (data) => {
  totalConfirmed.innerHTML = data.Global.TotalConfirmed.toLocaleString();
  totalRecover.innerHTML = data.Global.TotalRecovered.toLocaleString();
  totalDeaths.innerHTML = data.Global.TotalDeaths.toLocaleString();
};

// Listener
const initializationButtonListener = () => {
  buttonSummaryAllPeriod.addEventListener('click', () => {
    buttonSummaryAllPeriod.classList.add('select');
    buttonSummaryToday.classList.remove('select');
    getSummaryGlobalData();
  });

  buttonSummaryToday.addEventListener('click', () => {
    buttonSummaryAllPeriod.classList.remove('select');
    buttonSummaryToday.classList.add('select');
    getSummaryGlobalData();
  });
};

initializationButtonListener();

export default getDataForGlobalTable;
