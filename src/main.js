import { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable } from './globalTable';
import { createMap, createMarkerDataFile } from './map';

// const url
const urlSummary = 'https://api.covid19api.com/summary';
const urlByCountry = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag';
const urlByCountryWithCoordinates = 'https://corona.lmao.ninja/v2/countries';

const state = {
  dataCovid: null, // data from API
  dataCountryInfo: null, // flag, population
  dataCountryCoordinates: null,
  dataCountryForMap: null,
  // geoJSON: null,
  allPeriod: true,
  absValue: true,
  allWorld: true,
  countryId: null,
  population: null, // all word or select country
};

// setDataToTableGlobal rename 
const setDataToAllElement = () => {
  console.log('function setDataToAllElement');

  if (state.allPeriod === true) {
    setDataAllPeriodForGlobalTable(state.dataCovid);
  } else if (state.allPeriod === false) {
    setDataTodayForGlobalTable(state.dataCovid);
  }
  console.log('state ', state);
};

const countPopulationTotal = () => {
  if (state.allWorld === true) {
    const dataCountryInfo = state.dataCountryInfo;
    const worldPopulation = dataCountryInfo.reduce((acc, item) => acc + Number(item.population), 0);
    // console.log('worldPopulation ', worldPopulation);
    state.population = worldPopulation;
  }
};

// function startSetData() {
//  console.log('function startSetData');
//  const promise = new Promise(function (resolve) {
//    if (state.dataCovid !== null
//      && state.dataCountryInfo !== null
//      && state.dataCountryCoordinates !== null) {
//      //if (state.allPeriod === true) {
//      resolve('!!!!!!!!!!!!!!!!!!!!1resolve!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//    }
//  });

//  promise.then((a) => console.log(a));

// };

async function getDataByCountry() {
  console.log('function getDataByCountry');
  // console.log('state.dataCountryInfo !== null ', state.dataCountryInfo !== null);
  const countriesDataInJSON = await fetch(urlByCountry);
  state.dataCountryInfo = await countriesDataInJSON.json();
  // console.log('state.dataCountryInfo: ', state.dataCountryInfo);

  // console.log('state.dataCountryInfo !== null ', state.dataCountryInfo !== null);
}

async function getSummaryGlobalData() {
  console.log('function getSummaryGlobalData');
  // console.log('state.dataCovid !== null ', state.dataCovid !== null);
  const res = await fetch(urlSummary);
  state.dataCovid = await res.json();
  // console.log('state.dataCovid: ', state.dataCovid);
  // console.log('state.dataCovid !== null  ', state.dataCovid !== null);
  // console.log('TotalConfirmed main: ', state.dataCovid.Global.TotalConfirmed);
  // console.log('TotalDeaths: ', state.dataCovid.Global.TotalDeaths);
  // console.log('TotalRecovered: ', state.dataCovid.Global.TotalRecovered);
  setDataToAllElement();
  createMarkerDataFile();
}

async function getDataByCountryWithCoordinates() {
  console.log('function getDataByCountry');
  // console.log('state.dataCountryCoordinates !== null ', state.dataCountryCoordinates !== null);
  const countriesData = await fetch(urlByCountryWithCoordinates);
  state.dataCountryCoordinates = await countriesData.json();
  console.log('state.dataCountryCoordinates: ', state.dataCountryCoordinates);
  // console.log('state.dataCountryCoordinates !== null ', state.dataCountryCoordinates !== null);
}

// first page load
const firstPageLoad = () => {
  getDataByCountry();
  getSummaryGlobalData();
  getDataByCountryWithCoordinates();
  createMap();

  // startSetData();
  // startSetData().then(() => setDataToAllElement())
  //  .then(() => createMarkerDataFile());
};

firstPageLoad();

export { getSummaryGlobalData, state, setDataToAllElement, countPopulationTotal };
