import { setDataAllPeriodForGlobalTable } from './globalTable';
import {
  createMap, addMarkerOnMap, addCountryContur, createLegend,
} from './map';
import { createDataStructure, createDataStructureForChart } from './dataStructuring';

// const url
const urlSummary = 'https://disease.sh/v3/covid-19/all';
const urlSummaryWithDates = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
const urlByCountry = 'https://disease.sh/v3/covid-19/countries';
const urlByCountryWithDates = 'https://disease.sh/v3/covid-19/historical?lastdays=all';
const UrlGeoJson = 'https://cors-anywhere.herokuapp.com/https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson';

const state = {
  dataCovid: null, // data from API
  dataCovidDates: null,
  dataCountryInfo: null, // flag, population
  dataCountryInfoDates: null,
  dataGeoJson: null,
  allPeriod: true,
  absValue: true,
  allWorld: true,
  countryId: null,
  confirmed: true,
  recovered: false,
  deaths: false,
  dataList: [],
};

async function getDataByCountry() {
  // console.log('function getDataByCountry');
  const countriesDataInJSON = await fetch(urlByCountry);
  state.dataCountryInfo = await countriesDataInJSON.json();
  addMarkerOnMap();
  createLegend();
  createDataStructure(state.dataCountryInfo);
}

async function getDataByCountryDates() {
  const countriesDataInJSON = await fetch(urlByCountryWithDates);
  state.dataCountryInfoDates = await countriesDataInJSON.json();
  // let arr1 = state.dataList;
  
  // state.dataCountryInfoDates.forEach((element, index) => {
  //   if (element.province !== null) {
  //     if (element.province.toUpperCase().includes("AUSTRALIA")) {
  //       console.log('Element:', element);
  //     }
  //   }
  //   if (element.country.toUpperCase().includes("AUSTRALIA")) {
  //     console.log('Element:', element);
  //   }
  // });
  // console.log('country', state.dataCountryInfoDates);
  // createDataStructure(state.dataCountryInfoDates); Добавить функцию потом
}

async function getSummaryGlobalData() {
  // console.log('function getSummaryGlobalData');
  const res = await fetch(urlSummary);
  state.dataCovid = await res.json();
  // console.log('state.dataCovid: ', state.dataCovid);
  setDataAllPeriodForGlobalTable(state.dataCovid);
}

async function getSummaryGlobalDataDates() {
  const res = await fetch(urlSummaryWithDates);
  state.dataCovidDates = await res.json();
  console.log('Coviddates:', state.dataCovidDates);
  createDataStructureForChart(state.dataCovidDates);
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
  getSummaryGlobalDataDates();
  getDataByCountryDates();
};

firstPageLoad();

export { getSummaryGlobalData, state };
