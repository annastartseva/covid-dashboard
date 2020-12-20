import { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable } from './globalTable';
import { createMap, createMarkerDataFile } from './map';
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
	createDataStructure(state.dataCovid, state.dataCountryInfo);
}

// first page load
const firstPageLoad = () => {
	getDataByCountry();
	getSummaryGlobalData();
	getDataByCountryWithCoordinates();
	createMap();
};

firstPageLoad();

export { getSummaryGlobalData, state, setDataToAllElement, countPopulationTotal };
