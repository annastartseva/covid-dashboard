import { state } from './main';
import { setDataAllPeriodForGlobalTable, setDataTodayForGlobalTable, changeInfoByClickOnMap } from './globalTable';
import { sortCountryDataByClick } from './dataSort';
import { removeMarkerOnMap, addMarkerOnMap, changeLegend, removeLegend } from './map';
import { searchProcess } from './search';

const bodyScroll = document.querySelector('body');
// Table Global Case
const buttonSummaryAllPeriod = document.querySelector('.button__all-period');
const buttonSummaryToday = document.querySelector('.button__last-day');
const buttonSummaryAbs = document.querySelector('.button__abs');
const buttonSummaryPerPopulation = document.querySelector('.button__per-population');
//const totalConfirmed = document.querySelector('#total_confirm');
//const totalRecover = document.querySelector('#total_recover');
//const totalDeaths = document.querySelector('#total_deaths');
const buttonGlobalCase = document.querySelector('.button__summery-global');
const buttonFullScreenSummeryTable = document.querySelector('#full__screen-summery');
const buttonFullScreenSummeryTableClose = document.querySelector('#full__screen-summery-exit');
const tableSummery = document.querySelector('.table__summery-wrap');
const tableSummeryData = document.querySelector('.table__summery-data-wrap');

//Chart
const buttonFullScreenChart = document.querySelector('#full__screen-chart');
const buttonFullScreenChartClose = document.querySelector('#full__screen-chart-exit');
const chartWrapper = document.querySelector('.chart-wrap');
const buttonChartAllPeriod = document.querySelector('.button__all-period-chart');
const buttonChartToday = document.querySelector('.button__last-day-chart');
const buttonChartAbs = document.querySelector('.button__abs-chart');
const buttonChartPerPopulation = document.querySelector('.button__per-population-chart');
const buttonChartConfirmed = document.querySelector('.button__confirmed-chart');
const buttonChartRecovered = document.querySelector('.button__recovered-chart');
const buttonChartDeaths = document.querySelector('.button__deaths-chart');

// Table Countries
const buttonCountriesAllPeriod = document.querySelector('.button__all-period-countries');
const buttonCountriesToday = document.querySelector('.button__last-day-countries');
const buttonCountriesAbs = document.querySelector('.button__abs-countries');
const buttonCountriesPerPopulation = document.querySelector('.button__per-population-countries');
const buttonCountriesConfirmed = document.querySelector('.button__confirmed-countries');
const buttonCountriesRecovered = document.querySelector('.button__recovered-countries');
const buttonCountriesDeaths = document.querySelector('.button__deaths-countries');
const buttonFullScreenCountriesTable = document.querySelector('#full__screen-countries');
const buttonFullScreenCountriesTableClose = document.querySelector('#full__screen-countries-exit');
const countriesTableWrapper = document.querySelector('.table__city-list-wrap');

// Map
const buttonMapAllPeriod = document.querySelector('.button__all-period-map');
const buttonMapToday = document.querySelector('.button__last-day-map');
const buttonMapAbs = document.querySelector('.button__abs-map');
const buttonMapPerPopulation = document.querySelector('.button__per-population-map');
const buttonMapConfirmed = document.querySelector('.button__confirmed-map');
const buttonMapRecovered = document.querySelector('.button__recovered-map');
const buttonMapDeaths = document.querySelector('.button__deaths-map');
const buttonFullScreenMap = document.querySelector('#full__screen-map');
const buttonFullScreenMapClose = document.querySelector('#full__screen-map-exit');
const mapWrapper = document.querySelector('.map__data-wrap');

const buttonAllPeriodAddSelect = () => {
  buttonSummaryAllPeriod.classList.add('select');
  buttonCountriesAllPeriod.classList.add('select');
  buttonMapAllPeriod.classList.add('select');
  buttonChartAllPeriod.classList.add('select');
  buttonSummaryToday.classList.remove('select');
  buttonCountriesToday.classList.remove('select');
  buttonMapToday.classList.remove('select');
  buttonChartToday.classList.remove('select');
};

const buttonTodaySelect = () => {
  buttonSummaryAllPeriod.classList.remove('select');
  buttonCountriesAllPeriod.classList.remove('select');
  buttonMapAllPeriod.classList.remove('select');
  buttonChartAllPeriod.classList.remove('select');
  buttonSummaryToday.classList.add('select');
  buttonCountriesToday.classList.add('select');
  buttonMapToday.classList.add('select');
  buttonChartToday.classList.add('select');
};

const buttonAbsAddSelect = () => {
  buttonSummaryAbs.classList.add('select');
  buttonCountriesAbs.classList.add('select');
  buttonMapAbs.classList.add('select');
  buttonChartAbs.classList.add('select');
  buttonSummaryPerPopulation.classList.remove('select');
  buttonCountriesPerPopulation.classList.remove('select');
  buttonMapPerPopulation.classList.remove('select');
  buttonChartPerPopulation.classList.remove('select');
};

const buttonPopulationAddSelect = () => {
  buttonSummaryAbs.classList.remove('select');
  buttonCountriesAbs.classList.remove('select');
  buttonMapAbs.classList.remove('select');
  buttonChartAbs.classList.remove('select');
  buttonSummaryPerPopulation.classList.add('select');
  buttonCountriesPerPopulation.classList.add('select');
  buttonMapPerPopulation.classList.add('select');
  buttonChartPerPopulation.classList.add('select');
};

const buttonConfirmAddSelect = () => {
  buttonCountriesConfirmed.classList.add('select');
  buttonMapConfirmed.classList.add('select');
  buttonChartConfirmed.classList.add('select');
  buttonCountriesRecovered.classList.remove('select');
  buttonCountriesDeaths.classList.remove('select');
  buttonMapRecovered.classList.remove('select');
  buttonMapDeaths.classList.remove('select');
  buttonChartRecovered.classList.remove('select');
  buttonChartDeaths.classList.remove('select');
};

const buttonRecoverAddSelect = () => {
  buttonCountriesConfirmed.classList.remove('select');
  buttonMapConfirmed.classList.remove('select');
  buttonChartConfirmed.classList.remove('select');
  buttonCountriesRecovered.classList.add('select');
  buttonMapRecovered.classList.add('select');
  buttonChartRecovered.classList.add('select');
  buttonCountriesDeaths.classList.remove('select');
  buttonMapDeaths.classList.remove('select');
  buttonChartDeaths.classList.remove('select');
};

const buttonDeathAddSelect = () => {
  buttonCountriesConfirmed.classList.remove('select');
  buttonMapConfirmed.classList.remove('select');
  buttonChartConfirmed.classList.remove('select');
  buttonCountriesRecovered.classList.remove('select');
  buttonMapRecovered.classList.remove('select');
  buttonChartRecovered.classList.remove('select');
  buttonCountriesDeaths.classList.add('select');
  buttonMapDeaths.classList.add('select');
  buttonChartDeaths.classList.remove('select');
};

const setDataToAllElement = () => {
  if (state.allWorld === true) {
    if (state.allPeriod === true) {
      setDataAllPeriodForGlobalTable(state.dataCovid);
    } else if (state.allPeriod === false) {
      setDataTodayForGlobalTable(state.dataCovid);
    }
  } else {
    changeInfoByClickOnMap();
  }
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
    || event.target === buttonSummaryAllPeriod
    || event.target === buttonChartAllPeriod) {
    state.allPeriod = true;
    buttonAllPeriodAddSelect();
    setDataToAllElement();
    functionForChangeInfo();
  } else if (event.target === buttonCountriesToday
    || event.target === buttonSummaryToday
    || event.target === buttonMapToday
    || event.target === buttonChartToday) {
    state.allPeriod = false;
    buttonTodaySelect();
    setDataToAllElement();
    functionForChangeInfo();
  } else if (event.target === buttonSummaryAbs
    || event.target === buttonCountriesAbs
    || event.target === buttonMapAbs
    || event.target === buttonChartAbs) {
    state.absValue = true;
    buttonAbsAddSelect();
    setDataToAllElement();
    functionForChangeInfo();
  } else if (event.target === buttonSummaryPerPopulation
    || event.target === buttonCountriesPerPopulation
    || event.target === buttonMapPerPopulation
    || event.target === buttonChartPerPopulation) {
    state.absValue = false;
    buttonPopulationAddSelect();
    setDataToAllElement();
    functionForChangeInfo();
  } else if (event.target === buttonCountriesConfirmed
    || event.target === buttonMapConfirmed
    || event.target === buttonChartConfirmed) {
    state.confirmed = true;
    state.recovered = false;
    state.deaths = false;
    buttonConfirmAddSelect();
    functionForChangeInfoSecond();
  } else if (event.target === buttonCountriesRecovered
    || event.target === buttonMapRecovered
    || event.target === buttonChartRecovered) {
    state.confirmed = false;
    state.recovered = true;
    state.deaths = false;
    buttonRecoverAddSelect();
    functionForChangeInfoSecond();
  } else if (event.target === buttonCountriesDeaths
    || event.target === buttonMapDeaths
    || event.target === buttonChartDeaths) {
    state.confirmed = false;
    state.recovered = false;
    state.deaths = true;
    buttonDeathAddSelect();
    functionForChangeInfoSecond();
  } else if (event.target === buttonGlobalCase) {
    state.allWorld = true;
    setDataToAllElement();
  }
};

document.querySelector('#search__field').addEventListener('input', searchProcess);
document.querySelector('.data__wrap').addEventListener('click', (event) => changeDataInAllModules(event));

tableSummery.addEventListener('mouseenter', () => {
  if (!tableSummery.classList.contains('full-active')) {
    buttonFullScreenSummeryTable.classList.remove('none');
  }
});

tableSummery.addEventListener('mouseleave', () => {
  buttonFullScreenSummeryTable.classList.add('none');
});

buttonFullScreenSummeryTable.addEventListener('click', () => {
	tableSummery.classList.add('full-active');
	tableSummeryData.classList.add('full-active');
	bodyScroll.classList.add('stop-scroll');
  buttonFullScreenSummeryTable.classList.add('none');
  buttonFullScreenSummeryTableClose.classList.remove('none');
});

buttonFullScreenSummeryTableClose.addEventListener('click', () => {
	tableSummery.classList.remove('full-active');
	tableSummeryData.classList.remove('full-active');
	bodyScroll.classList.remove('stop-scroll');
  buttonFullScreenSummeryTable.classList.remove('none');
  buttonFullScreenSummeryTableClose.classList.add('none');
});

chartWrapper.addEventListener('mouseenter', () => {
  if (!chartWrapper.classList.contains('full-active')) {
    buttonFullScreenChart.classList.remove('none');
  }
});

chartWrapper.addEventListener('mouseleave', () => {
  buttonFullScreenChart.classList.add('none');
});

buttonFullScreenChart.addEventListener('click', () => {
	chartWrapper.classList.add('full-active');
	bodyScroll.classList.add('stop-scroll');
  buttonFullScreenChart.classList.add('none');
  buttonFullScreenChartClose.classList.remove('none');
});

buttonFullScreenChartClose.addEventListener('click', () => {
	chartWrapper.classList.remove('full-active');
	bodyScroll.classList.remove('stop-scroll');
  buttonFullScreenChart.classList.remove('none');
  buttonFullScreenChartClose.classList.add('none');
});

mapWrapper.addEventListener('mouseenter', () => {
  if (!mapWrapper.classList.contains('full-active')) {
    buttonFullScreenMap.classList.remove('none');
  }
});

mapWrapper.addEventListener('mouseleave', () => {
  buttonFullScreenMap.classList.add('none');
});

buttonFullScreenMap.addEventListener('click', () => {
	mapWrapper.classList.add('full-active');
	bodyScroll.classList.add('stop-scroll');
  buttonFullScreenMap.classList.add('none');
  buttonFullScreenMapClose.classList.remove('none');
});

buttonFullScreenMapClose.addEventListener('click', () => {
	mapWrapper.classList.remove('full-active');
	bodyScroll.classList.remove('stop-scroll');
  buttonFullScreenMap.classList.remove('none');
  buttonFullScreenMapClose.classList.add('none');
});

countriesTableWrapper.addEventListener('mouseenter', () => {
	if (!mapWrapper.classList.contains('full-active')) {
		buttonFullScreenCountriesTable.classList.remove('none');
	}
});

countriesTableWrapper.addEventListener('mouseleave', () => {
	buttonFullScreenCountriesTable.classList.add('none');
});

buttonFullScreenCountriesTable.addEventListener('click', () => {
	countriesTableWrapper.classList.add('full-active');
	bodyScroll.classList.add('stop-scroll');
	buttonFullScreenCountriesTable.classList.add('none');
	buttonFullScreenCountriesTableClose.classList.remove('none');
});

buttonFullScreenCountriesTableClose.addEventListener('click', () => {
	countriesTableWrapper.classList.remove('full-active');
	bodyScroll.classList.remove('stop-scroll');
	buttonFullScreenCountriesTable.classList.remove('none');
	buttonFullScreenCountriesTableClose.classList.add('none');
});
