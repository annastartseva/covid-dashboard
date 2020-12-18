import { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable } from './globalTable';

// const url
const urlSummary = 'https://api.covid19api.com/summary';

const state = {
  dataCovid: null, // data from API
  dataCountryInfo: null, // flag, population
  allPeriod: true,
  absValue: true,
  allWorld: true,
  countryId: null,
  population: null, // all word or select country
};

// setDataToTableGlobal rename 
const setDataToAllElement = () => {
  console.log('function setDataToAllElement');
  console.log('state ', state);
  if (state.allPeriod === true) {
    setDataAllPeriodForGlobalTable(state.dataCovid);
  } else if (state.allPeriod === false) {
    setDataTodayForGlobalTable(state.dataCovid);
  }
};

const countPopulationTotal = () => {
  if (state.allWorld === true) {
    const dataCountryInfo = state.dataCountryInfo;
    const worldPopulation = dataCountryInfo.reduce((acc, item) => acc + Number(item.population), 0);
    console.log('worldPopulation ', worldPopulation);
    state.population = worldPopulation;
  }
};

async function getDataByCountry() {
  console.log('function getDataByCountry');
  const countriesDataInJSON = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;flag');
  state.dataCountryInfo = await countriesDataInJSON.json();
  console.log('state.dataCountryInfo: ', state.dataCountryInfo);
}

async function getSummaryGlobalData() {
  console.log('function getSummaryGlobalData');
  const url = urlSummary;
  const res = await fetch(url);
  state.dataCovid = await res.json();
  console.log('state.dataCovid: ', state.dataCovid);
  console.log('TotalConfirmed main: ', state.dataCovid.Global.TotalConfirmed);
  console.log('TotalDeaths: ', state.dataCovid.Global.TotalDeaths);
  console.log('TotalRecovered: ', state.dataCovid.Global.TotalRecovered);
  setDataToAllElement();
}

// first page load
const firstPageLoad = () => {
  getDataByCountry();
  getSummaryGlobalData();
};

firstPageLoad();

export { getSummaryGlobalData, state, setDataToAllElement, countPopulationTotal };
