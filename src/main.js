import { setDataAllPeriodForGlobalTable } from './globalTable';
import { createMap, addMarkerOnMap, addCountryContur, createLegend } from './map';
import { createDataStructure } from './dataStructuring';

const dataUpdate = document.querySelector('.actual__data');

// const url
const urlSummary = 'https://disease.sh/v3/covid-19/all';
const urlByCountry = 'https://disease.sh/v3/covid-19/countries';
const UrlGeoJson = 'https://cors-anywhere.herokuapp.com/https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson';

const state = {
  dataCovid: null, // data from API
  dataCountryInfo: null, // flag, population
  dataGeoJson: null,
  allPeriod: true,
  absValue: true,
  allWorld: true,
  countryId: null,
  confirmed: true,
  recovered: false,
  deaths: false,
};

async function getDataByCountry() {
  // console.log('function getDataByCountry');
  const countriesDataInJSON = await fetch(urlByCountry);
  state.dataCountryInfo = await countriesDataInJSON.json();
  console.log('state.dataCountryInfo: ', state.dataCountryInfo);
  addMarkerOnMap();
  createLegend();
  createDataStructure(state.dataCountryInfo);
}

async function getSummaryGlobalData() {
  // console.log('function getSummaryGlobalData');
  const res = await fetch(urlSummary);
  state.dataCovid = await res.json();
  const createDataUpdate = new Date(state.dataCovid.updated);
  dataUpdate.innerHTML = `Last Update <br> ${createDataUpdate}`;
  console.log('state.dataCovid: ', state.dataCovid);
  setDataAllPeriodForGlobalTable(state.dataCovid);
}

async function getGeoJsonData() {
  // console.log('function getGeoJsonData');
  const data = await fetch(UrlGeoJson);
  state.dataGeoJson = await data.json();
  // console.log('state.dataGeoJson: ', state.dataGeoJson);
  addCountryContur();
}

// first page load
const firstPageLoad = () => {
  getDataByCountry();
  getSummaryGlobalData();
  getGeoJsonData();
  createMap();
};

firstPageLoad();

export { getSummaryGlobalData, state };
