import { state } from './main';
import { createTable } from './countriesTable';

// const buttonCountriesAllPeriod = document.querySelector('.button__all-period-countries');
// const buttonCountriesToday = document.querySelector('.button__last-day-countries');
// const buttonCountriesAbs = document.querySelector('.button__abs-countries');
// const buttonCountriesPerPopulation = document.querySelector('.button__per-population-countries');
// const buttonCountriesConfirmed = document.querySelector('.button__confirmed-countries');
// const buttonCountriesRecovered = document.querySelector('.button__recovered-countries');
// const buttonCountriesDeaths = document.querySelector('.button__deaths-countries');

const sortCountryDataByDefault = () => {
  const array = [];
  const tableDisplayData = state.dataCountryInfo;
  tableDisplayData.sort((a, b) => {
    if (a.cases < b.cases) { return 1; }
    if (a.cases > b.cases) { return -1; }
    return 0;
  });
  tableDisplayData.forEach((element) => {
    const obj = {
      data: element.cases,
      name: element.country,
      flag: element.countryInfo.flag,
      id: element.countryInfo._id,
      iso: element.countryInfo.iso2,
    };
    array.push(obj);
  });
  createTable(array);
};

const sortCountryDataByClick = () => {
  // if (event.target === buttonCountriesAllPeriod) {
  //   state.allPeriod = true;
  //   buttonCountriesAllPeriod.classList.add('select');
  //   buttonCountriesToday.classList.remove('select');
  // } else if (event.target === buttonCountriesToday) {
  //   state.allPeriod = false;
  //   buttonCountriesAllPeriod.classList.remove('select');
  //   buttonCountriesToday.classList.add('select');
  // } else if (event.target === buttonCountriesAbs) {
  //   state.absValue = true;
  //   buttonCountriesAbs.classList.add('select');
  //   buttonCountriesPerPopulation.classList.remove('select');
  // } else if (event.target === buttonCountriesPerPopulation) {
  //   state.absValue = false;
  //   buttonCountriesAbs.classList.remove('select');
  //   buttonCountriesPerPopulation.classList.add('select');
  // } else if (event.target === buttonCountriesConfirmed) {
  //   state.confirmed = true;
  //   state.recovered = false;
  //   state.deaths = false;
  //   buttonCountriesConfirmed.classList.add('select');
  //   buttonCountriesRecovered.classList.remove('select');
  //   buttonCountriesDeaths.classList.remove('select');
  // } else if (event.target === buttonCountriesRecovered) {
  //   state.confirmed = false;
  //   state.recovered = true;
  //   state.deaths = false;
  //   buttonCountriesConfirmed.classList.remove('select');
  //   buttonCountriesRecovered.classList.add('select');
  //   buttonCountriesDeaths.classList.remove('select');
  // } else if (event.target === buttonCountriesDeaths) {
  //   state.confirmed = false;
  //   state.recovered = false;
  //   state.deaths = true;
  //   buttonCountriesConfirmed.classList.remove('select');
  //   buttonCountriesRecovered.classList.remove('select');
  //   buttonCountriesDeaths.classList.add('select');
  // }

  const array = [];
  const tableDisplayData = state.dataCountryInfo;
  const period = state.allPeriod;
  const value = state.absValue;
  const confirmed = state.confirmed;
  const deaths = state.deaths;
  const recovered = state.recovered;
  let paramName = 'cases';

  if (period === true && value === true && confirmed === true) {
    paramName = 'cases';
  } else if (period === false && value === true && confirmed === true) {
    paramName = 'todayCases';
  } else if (period === true && value === false && confirmed === true) {
    paramName = 'totalConfirmedAverage';
  } else if (period === false && value === false && confirmed === true) {
    paramName = 'todayConfirmedAverage';
  } else if (period === true && value === true && deaths === true) {
    paramName = 'deaths';
  } else if (period === false && value === true && deaths === true) {
    paramName = 'todayDeaths';
  } else if (period === true && value === false && deaths === true) {
    paramName = 'totalDeathsAverage';
  } else if (period === false && value === false && deaths === true) {
    paramName = 'todayDeathsAverage';
  } else if (period === true && value === true && recovered === true) {
    paramName = 'recovered';
  } else if (period === false && value === true && recovered === true) {
    paramName = 'todayRecovered';
  } else if (period === true && value === false && recovered === true) {
    paramName = 'totalRecoveredAverage';
  } else if (period === false && value === false && recovered === true) {
    paramName = 'todayRecoveredAverage';
  }

  tableDisplayData.sort((a, b) => {
    if (a[paramName] < b[paramName]) { return 1; }
    if (a[paramName] > b[paramName]) { return -1; }
    return 0;
  });
  tableDisplayData.forEach((element) => {
    const obj = {
      data: element[paramName],
      name: element.country,
      flag: element.countryInfo.flag,
    };
    array.push(obj);
  });
  createTable(array);
};

export { sortCountryDataByDefault, sortCountryDataByClick };
