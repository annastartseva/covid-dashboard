import { state } from './main';

// Table Global Case
const totalConfirmed = document.querySelector('#total_confirm');
const totalRecover = document.querySelector('#total_recover');
const totalDeaths = document.querySelector('#total_deaths');

const setDataToDomElement = (confirmed, recover, deaths) => {
  totalConfirmed.innerHTML = confirmed.toLocaleString();
  totalRecover.innerHTML = recover.toLocaleString();
  totalDeaths.innerHTML = deaths.toLocaleString();
};

const setDataAllPeriodForGlobalTable = (data) => {
  let totalConfirmedData = data.cases;
  let totalRecoverData = data.recovered;
  let totalDeathsData = data.deaths;
  if (state.absValue === false) {   
    totalConfirmedData = Math.round((totalConfirmedData / data.population) * 100000);
    totalRecoverData = Math.round((totalRecoverData / data.population) * 100000);
    totalDeathsData = Math.round((totalDeathsData / data.population) * 100000);
  }
  setDataToDomElement(totalConfirmedData, totalRecoverData, totalDeathsData);
};

const setDataTodayForGlobalTable = (data) => {
  let todayConfirmedData = data.todayCases;
  let todayRecoverData = data.todayRecovered;
  let todayDeathsData = data.todayDeaths;
  if (state.absValue === false) {
    todayConfirmedData = todayConfirmedData / (data.population / 100000);
    todayRecoverData = todayRecoverData / (data.population / 100000);
    todayDeathsData = todayDeathsData / (data.population / 100000);
    todayConfirmedData = todayConfirmedData.toFixed(2);
    todayRecoverData = todayRecoverData.toFixed(2);
    todayDeathsData = todayDeathsData.toFixed(2);
  }
  setDataToDomElement(todayConfirmedData, todayRecoverData, todayDeathsData);
};

export { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable };
