import { setDataAllPeriodForGlobalTable } from './globalTable';
import {
  createMap, addMarkerOnMap, addCountryContur, createLegend,
} from './map';
import { createDataStructure, createDataStructureForChart } from './dataStructuring';

const dataUpdate = document.querySelector('.actual__data');

const urlSummary = 'https://disease.sh/v3/covid-19/all';
const urlSummaryWithDates = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
const urlByCountry = 'https://disease.sh/v3/covid-19/countries';
const urlByCountryWithDates = 'https://disease.sh/v3/covid-19/historical?lastdays=all';
const UrlGeoJson = 'https://cors-anywhere.herokuapp.com/https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson';

const state = {
  dataCovid: null,
  dataCovidDates: null,
  dataCountryInfo: null,
  dataCountryInfoDates: null,
  dataGeoJson: null,
  allPeriod: true,
  absValue: true,
  allWorld: true,
  countryId: null,
  confirmed: true,
  recovered: false,
  deaths: false,
  countryNameForChart: null,
  dataList: [],
};

async function getDataByCountry() {
  const countriesDataInJSON = await fetch(urlByCountry);
  state.dataCountryInfo = await countriesDataInJSON.json();
  addMarkerOnMap();
  createLegend();
  createDataStructure(state.dataCountryInfo);
}

async function getDataByCountryDates() {
  const countriesDataInJSON = await fetch(urlByCountryWithDates);
  state.dataCountryInfoDates = await countriesDataInJSON.json();
  // createDataStructure(state.dataCountryInfoDates); Добавить функцию потом
}

async function getSummaryGlobalData() {
  const res = await fetch(urlSummary);
  state.dataCovid = await res.json();
  const createDataUpdate = new Date(state.dataCovid.updated);
  dataUpdate.innerHTML = `Last Update <br> ${createDataUpdate}`;
  // console.log('state.dataCovid: ', state.dataCovid);
  setDataAllPeriodForGlobalTable(state.dataCovid);
}

async function getSummaryGlobalDataDates() {
  const res = await fetch(urlSummaryWithDates);
  state.dataCovidDates = await res.json();
  createDataStructureForChart(state.dataCovidDates);
}

async function getGeoJsonData() {
  const data = await fetch(UrlGeoJson);
  state.dataGeoJson = await data.json();
  addCountryContur();
}

const firstPageLoad = () => {
  getDataByCountry();
  getSummaryGlobalData();
  getGeoJsonData();
  createMap();
  getSummaryGlobalDataDates();
  getDataByCountryDates();
};

firstPageLoad();

export { getSummaryGlobalData, state };
