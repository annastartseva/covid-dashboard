import { state } from './main';
import { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable } from './globalTable';
import { removeMarkerOnMap } from './map';

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
  buttonSummaryAllPeriod.classList.toggle('select');
  buttonCountriesAllPeriod.classList.toggle('select');
  buttonMapAllPeriod.classList.toggle('select');
  buttonSummaryToday.classList.toggle('select');
  buttonCountriesToday.classList.toggle('select');
  buttonMapToday.classList.toggle('select');
};
const buttonAbsAddSelect = () => {
  buttonSummaryAbs.classList.toggle('select');
  buttonCountriesAbs.classList.toggle('select');
  buttonMapAbs.classList.toggle('select');
  buttonSummaryPerPopulation.classList.toggle('select');
  buttonCountriesPerPopulation.classList.toggle('select');
  buttonMapPerPopulation.classList.toggle('select');
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
  buttonCountriesDeaths.classList.add('select');
  buttonMapRecovered.classList.remove('select');
  buttonMapDeaths.classList.remove('select');
};

const buttonDeathAddSelect = () => {
  buttonCountriesConfirmed.classList.remove('select');
  buttonMapConfirmed.classList.remove('select');
  buttonCountriesRecovered.classList.remove('select');
  buttonCountriesDeaths.classList.remove('select');
  buttonMapRecovered.classList.add('select');
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

const changeDataInAllModules = (event) => {
  if (event.target === buttonCountriesAllPeriod
    || event.target === buttonMapAllPeriod
    || event.target === buttonSummaryAllPeriod) {
    state.allPeriod = true;
    buttonAllPeriodAddSelect();
    setDataAllPeriodForGlobalTable(state.dataCovid);
    removeMarkerOnMap();
  } else if (event.target === buttonCountriesToday
    || event.target === buttonSummaryToday
    || event.target === buttonMapToday) {
    state.allPeriod = false;
    buttonAllPeriodAddSelect();
    setDataTodayForGlobalTable(state.dataCovid);
    removeMarkerOnMap();
  } else if (event.target === buttonSummaryAbs
    || event.target === buttonCountriesAbs
    || event.target === buttonMapAbs) {
    state.absValue = true;
    buttonAbsAddSelect();
    setDataToAllElement();
  } else if (event.target === buttonSummaryPerPopulation
    || event.target === buttonCountriesPerPopulation
    || event.target === buttonMapPerPopulation) {
    state.absValue = false;
    buttonAbsAddSelect();
    setDataToAllElement();
  } else if (event.target === buttonCountriesConfirmed
    || event.target === buttonMapConfirmed) {
    buttonConfirmAddSelect();
    state.confirmed = true;
    state.recovered = false;
    state.deaths = false;
  } else if (event.target === buttonCountriesRecovered || event.target === buttonMapRecovered) {
    buttonRecoverAddSelect();
    state.confirmed = false;
    state.recovered = true;
    state.deaths = false;
  } else if (event.target === buttonCountriesDeaths || event.target === buttonMapDeaths) {
    buttonDeathAddSelect();
    state.confirmed = false;
    state.recovered = false;
    state.deaths = true;
  }
  console.log('event ', event);
}

document.querySelector('.data__wrap').addEventListener('click', (event) => changeDataInAllModules(event));
