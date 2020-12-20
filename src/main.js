import { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable } from './globalTable';
import { createMap, addMarkerOnMap } from './map';
import { createDataStructure } from './dataStructuring';

// const url
const urlSummary = 'https://disease.sh/v3/covid-19/all';
const urlByCountry = 'https://disease.sh/v3/covid-19/countries';

const state = {
  dataCovid: null, // data from API
  dataCountryInfo: null, // flag, population
  allPeriod: true,
  absValue: true,
  allWorld: true,
  countryId: null,
  population: null, // all word or select country
  confirmed: true,
  recovered: false,
  deaths: false,
};

const setDataToAllElement = () => {
  console.log('function setDataToAllElement');

  if (state.allPeriod === true) {
    setDataAllPeriodForGlobalTable(state.dataCovid);
  } else if (state.allPeriod === false) {
    setDataTodayForGlobalTable(state.dataCovid);
  }
  // console.log('state ', state);
};

async function getDataByCountry() {
  console.log('function getDataByCountry');
  const countriesDataInJSON = await fetch(urlByCountry);
  state.dataCountryInfo = await countriesDataInJSON.json();
  console.log('state.dataCountryInfo: ', state.dataCountryInfo);
  addMarkerOnMap();
}

async function getSummaryGlobalData() {
  console.log('function getSummaryGlobalData');
  const res = await fetch(urlSummary);
  state.dataCovid = await res.json();
  console.log('state.dataCovid: ', state.dataCovid);
  setDataToAllElement();
  createDataStructure(state.dataCountryInfo);
}

// first page load
const firstPageLoad = () => {
  getDataByCountry();
  getSummaryGlobalData();
  createMap();
};

firstPageLoad();

export { getSummaryGlobalData, state, setDataToAllElement };
