import { state, setDataToAllElement, countPopulationTotal } from './main';

// const stateData = state;

// Table Global Case
const buttonSummaryAllPeriod = document.querySelector('.button__all-period');
const buttonSummaryToday = document.querySelector('.button__last-day');
const buttonSummaryAbs = document.querySelector('.button__abs');
const buttonSummaryPerPopulation = document.querySelector('.button__per-population');
const totalConfirmed = document.querySelector('#total_confirm');
const totalRecover = document.querySelector('#total_recover');
const totalDeaths = document.querySelector('#total_deaths');

const setDataToDomElement = (confirmed, recover, deaths) => {
  totalConfirmed.innerHTML = confirmed.toLocaleString();
  totalRecover.innerHTML = recover.toLocaleString();
  totalDeaths.innerHTML = deaths.toLocaleString();
};

const setDataAllPeriodForGlobalTable = (data) => {
  let totalConfirmedData = data.Global.TotalConfirmed;
  let totalRecoverData = data.Global.TotalRecovered;
  let totalDeathsData = data.Global.TotalDeaths;
  if (state.absValue === false) {
    totalConfirmedData = Math.round(totalConfirmedData / (state.population / 100000));
    totalRecoverData = Math.round(totalRecoverData / (state.population / 100000));
    totalDeathsData = Math.round(totalDeathsData / (state.population / 100000));
  }
  setDataToDomElement(totalConfirmedData, totalRecoverData, totalDeathsData);
};

const setDataTodayForGlobalTable = (data) => {
  let todayConfirmedData = data.Global.NewConfirmed;
  let todayRecoverData = data.Global.NewRecovered;
  let todayDeathsData = data.Global.NewDeaths;
  if (state.absValue === false) {
    todayConfirmedData = Math.round(todayConfirmedData / (state.population / 100000));
    todayRecoverData = Math.round(todayRecoverData / (state.population / 100000));
    todayDeathsData = Math.round(todayDeathsData / (state.population / 100000));
  }
  setDataToDomElement(todayConfirmedData, todayRecoverData, todayDeathsData);
};

// Listener
const initializationButtonListener = () => {
  buttonSummaryAllPeriod.addEventListener('click', () => {
    console.log('state ', state);
    // console.log('stateData.allPeriod ', state.hasOwnProperty(allPeriod));
    buttonSummaryAllPeriod.classList.add('select');
    buttonSummaryToday.classList.remove('select');
    state.allPeriod = true;
    console.log('stateData.allPeriod ', state.allPeriod);
    setDataToAllElement();
  });

  buttonSummaryToday.addEventListener('click', () => {
    console.log('state ', state);
    console.log('stateData.allPeriod ', state.allPeriod);
    buttonSummaryAllPeriod.classList.remove('select');
    buttonSummaryToday.classList.add('select');
    state.allPeriod = false;
    console.log('stateData.allPeriod ', state.allPeriod);
    setDataToAllElement();
  });

  buttonSummaryAbs.addEventListener('click', () => {
    buttonSummaryPerPopulation.classList.remove('select');
    buttonSummaryAbs.classList.add('select');
    state.absValue = true;
    console.log('stateData.allPeriod ', state.allPeriod);
    countPopulationTotal();
    setDataToAllElement();
  });

  buttonSummaryPerPopulation.addEventListener('click', () => {
    buttonSummaryAbs.classList.remove('select');
    buttonSummaryPerPopulation.classList.add('select');
    state.absValue = false;
    console.log('stateData.allPeriod ', state.allPeriod);
    countPopulationTotal();
    setDataToAllElement();
  });
};

initializationButtonListener();

export { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable };
