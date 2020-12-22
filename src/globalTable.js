import { state } from './main';

// Table Global Case
const totalConfirmed = document.querySelector('#total_confirm');
const totalRecover = document.querySelector('#total_recover');
const totalDeaths = document.querySelector('#total_deaths');
const displayNameCountry = document.querySelector('.map__country');

const setDataToDomElement = (confirmed, recover, deaths, nameCountry) => {
  displayNameCountry.innerHTML = nameCountry.toUpperCase();
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
  setDataToDomElement(totalConfirmedData, totalRecoverData, totalDeathsData, 'ALL WORLD');
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
  setDataToDomElement(todayConfirmedData, todayRecoverData, todayDeathsData, 'ALL WORLD');
};

const setDataAllPeriodForCountryInGlobalTable = () => {
  const selectCountryId = state.countryId;
  const data = state.dataCountryInfo;
  const idInTable = data.map((item) => item.countryInfo.iso2);
  const idCountryId = idInTable.indexOf(selectCountryId);
  // const numberCase = state.dataCountryInfo[idCountryId][tooltipText[0]];
  const countryName = data[idCountryId].country;
  const countryPopulation = data[idCountryId].population;
  console.log('country ', countryName);
  let totalCountryConfirmedData = data[idCountryId].cases;
  let totalCountryRecoverData = data[idCountryId].recovered;
  let totalCountryDeathsData = data[idCountryId].deaths;
  if (state.absValue === false) {
    totalCountryConfirmedData = Math.round((totalCountryConfirmedData / countryPopulation) * 100000);
    totalCountryRecoverData = Math.round((totalCountryRecoverData / countryPopulation) * 100000);
    totalCountryDeathsData = Math.round((totalCountryDeathsData / countryPopulation) * 100000);
  }
  setDataToDomElement(totalCountryConfirmedData, totalCountryRecoverData, totalCountryDeathsData, countryName);
};

const setDataTodayForCountryInGlobalTable = () => {
  const selectCountryId = state.countryId;
  const data = state.dataCountryInfo;
  const idInTable = data.map((item) => item.countryInfo.iso2);
  const idCountryId = idInTable.indexOf(selectCountryId);
  // const numberCase = state.dataCountryInfo[idCountryId][tooltipText[0]];
  const countryName = data[idCountryId].country;
  const countryPopulation = data[idCountryId].population;
  console.log('country ', countryName);
  let todayCountryConfirmedData = data[idCountryId].todayCases;
  let todayCountryRecoverData = data[idCountryId].todayRecovered;
  let todayCountryDeathsData = data[idCountryId].todayDeaths;
  if (state.absValue === false) {
    todayCountryConfirmedData = (todayCountryConfirmedData / countryPopulation) * 100000;
    todayCountryRecoverData = (todayCountryRecoverData / countryPopulation) * 100000;
    todayCountryDeathsData = (todayCountryDeathsData / countryPopulation) * 100000;
    todayCountryConfirmedData = todayCountryConfirmedData.toFixed(2);
    todayCountryRecoverData = todayCountryRecoverData.toFixed(2);
    todayCountryDeathsData = todayCountryDeathsData.toFixed(2);
  }
  setDataToDomElement(todayCountryConfirmedData, todayCountryRecoverData, todayCountryDeathsData, countryName);

};

const changeInfoByClickOnMap = () => {
  if (state.allPeriod === true) {
    setDataAllPeriodForCountryInGlobalTable();
  } else if (state.allPeriod === false) {
    setDataTodayForCountryInGlobalTable();
  }
};

export { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable, changeInfoByClickOnMap };
