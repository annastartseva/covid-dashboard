import { state } from './main';
import { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable } from './globalTable';
import { sortCountryDataByClick } from './dataSort';
import { removeMarkerOnMap, addMarkerOnMap, changeLegend, removeLegend } from './map';
import { searchProcess } from './search';

// Table Global Case
const buttonSummaryAllPeriod = document.querySelector('.button__all-period');
const buttonSummaryToday = document.querySelector('.button__last-day');
const buttonSummaryAbs = document.querySelector('.button__abs');
const buttonSummaryPerPopulation = document.querySelector('.button__per-population');
const totalConfirmed = document.querySelector('#total_confirm');
const totalRecover = document.querySelector('#total_recover');
const totalDeaths = document.querySelector('#total_deaths');

// Table Countries
const buttonCountriesAllPeriod = document.querySelector('.button__all-period-countries');
const buttonCountriesToday = document.querySelector('.button__last-day-countries');
const buttonCountriesAbs = document.querySelector('.button__abs-countries');
const buttonCountriesPerPopulation = document.querySelector('.button__per-population-countries');
const buttonCountriesConfirmed = document.querySelector('.button__confirmed-countries');
const buttonCountriesRecovered = document.querySelector('.button__recovered-countries');
const buttonCountriesDeaths = document.querySelector('.button__deaths-countries');

// Map
const buttonMapAllPeriod = document.querySelector('.button__all-period-map');
const buttonMapToday = document.querySelector('.button__last-day-map');
const buttonMapAbs = document.querySelector('.button__abs-map');
const buttonMapPerPopulation = document.querySelector('.button__per-population-map');
const buttonMapConfirmed = document.querySelector('.button__confirmed-map');
const buttonMapRecovered = document.querySelector('.button__recovered-map');
const buttonMapDeaths = document.querySelector('.button__deaths-map');

const buttonAllPeriodAddSelect = () => {
  buttonSummaryAllPeriod.classList.add('select');
  buttonCountriesAllPeriod.classList.add('select');
  buttonMapAllPeriod.classList.add('select');
  buttonSummaryToday.classList.remove('select');
  buttonCountriesToday.classList.remove('select');
  buttonMapToday.classList.remove('select');
};

const buttonTodaySelect = () => {
  buttonSummaryAllPeriod.classList.remove('select');
  buttonCountriesAllPeriod.classList.remove('select');
  buttonMapAllPeriod.classList.remove('select');
  buttonSummaryToday.classList.add('select');
  buttonCountriesToday.classList.add('select');
  buttonMapToday.classList.add('select');
};

const buttonAbsAddSelect = () => {
  buttonSummaryAbs.classList.add('select');
  buttonCountriesAbs.classList.add('select');
  buttonMapAbs.classList.add('select');
  buttonSummaryPerPopulation.classList.remove('select');
  buttonCountriesPerPopulation.classList.remove('select');
  buttonMapPerPopulation.classList.remove('select');
};

const buttonPopulationAddSelect = () => {
  buttonSummaryAbs.classList.remove('select');
  buttonCountriesAbs.classList.remove('select');
  buttonMapAbs.classList.remove('select');
  buttonSummaryPerPopulation.classList.add('select');
  buttonCountriesPerPopulation.classList.add('select');
  buttonMapPerPopulation.classList.add('select');
};

const buttonConfirmAddSelect = () => {
  buttonCountriesConfirmed.classList.add('select');
  buttonMapConfirmed.classList.add('select');
  buttonCountriesRecovered.classList.remove('select');
  buttonCountriesDeaths.classList.remove('select');
  buttonMapRecovered.classList.remove('select');
  buttonMapDeaths.classList.remove('select');
};

const buttonRecoverAddSelect = () => {
  buttonCountriesConfirmed.classList.remove('select');
  buttonMapConfirmed.classList.remove('select');
  buttonCountriesRecovered.classList.add('select');
  buttonMapRecovered.classList.add('select');
  buttonCountriesDeaths.classList.remove('select');
  buttonMapDeaths.classList.remove('select');
};

const buttonDeathAddSelect = () => {
  buttonCountriesConfirmed.classList.remove('select');
  buttonMapConfirmed.classList.remove('select');
  buttonCountriesRecovered.classList.remove('select');
  buttonMapRecovered.classList.remove('select');
  buttonCountriesDeaths.classList.add('select');
  buttonMapDeaths.classList.add('select');
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

const functionForChangeInfo = () => {
  removeMarkerOnMap();
  sortCountryDataByClick();
  addMarkerOnMap();
};

const functionForChangeInfoSecond = () => {
  sortCountryDataByClick();
  removeMarkerOnMap();
  addMarkerOnMap();
  removeLegend();
  changeLegend();
};

const changeDataInAllModules = (event) => {
  if (event.target === buttonCountriesAllPeriod
    || event.target === buttonMapAllPeriod
    || event.target === buttonSummaryAllPeriod) {
    state.allPeriod = true;
    buttonAllPeriodAddSelect();
    setDataAllPeriodForGlobalTable(state.dataCovid);
    functionForChangeInfo();
  } else if (event.target === buttonCountriesToday
    || event.target === buttonSummaryToday
    || event.target === buttonMapToday) {
    state.allPeriod = false;
    buttonTodaySelect();
    setDataTodayForGlobalTable(state.dataCovid);
    functionForChangeInfo();
  } else if (event.target === buttonSummaryAbs
    || event.target === buttonCountriesAbs
    || event.target === buttonMapAbs) {
    state.absValue = true;
    buttonAbsAddSelect();
    setDataToAllElement();
    functionForChangeInfo();
  } else if (event.target === buttonSummaryPerPopulation
    || event.target === buttonCountriesPerPopulation
    || event.target === buttonMapPerPopulation) {
    state.absValue = false;
    buttonPopulationAddSelect();
    setDataToAllElement();
    functionForChangeInfo();
  } else if (event.target === buttonCountriesConfirmed
    || event.target === buttonMapConfirmed) {
    state.confirmed = true;
    state.recovered = false;
    state.deaths = false;
    buttonConfirmAddSelect();
    functionForChangeInfoSecond();
  } else if (event.target === buttonCountriesRecovered || event.target === buttonMapRecovered) {
    state.confirmed = false;
    state.recovered = true;
    state.deaths = false;
    buttonRecoverAddSelect();
    functionForChangeInfoSecond();
  } else if (event.target === buttonCountriesDeaths || event.target === buttonMapDeaths) {
    state.confirmed = false;
    state.recovered = false;
    state.deaths = true;
    buttonDeathAddSelect();
    functionForChangeInfoSecond();
  }
  console.log('event ', event);
};

document.querySelector('#search__field').addEventListener('input', searchProcess);
document.querySelector('.data__wrap').addEventListener('click', (event) => changeDataInAllModules(event));
