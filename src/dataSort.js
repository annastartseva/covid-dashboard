import { state } from './main';
import { createTable } from './countriesTable';

const buttonCountriesAllPeriod = document.querySelector('.button__all-period-countries');
const buttonCountriesToday = document.querySelector('.button__last-day-countries');
const buttonCountriesAbs = document.querySelector('.button__abs-countries');
const buttonCountriesPerPopulation = document.querySelector('.button__per-population-countries');
const buttonCountriesConfirmed = document.querySelector('.button__confirmed-countries');
const buttonCountriesRecovered = document.querySelector('.button__recovered-countries');
const buttonCountriesDeaths = document.querySelector('.button__deaths-countries');

const sortCountryDataByDefault = () => {
  const array = [];
  const tableDisplayData = state.dataCovid.Countries;
    tableDisplayData.sort((a, b) => {
      if (a.TotalConfirmed < b.TotalConfirmed) { return 1; }
      if (a.TotalConfirmed > b.TotalConfirmed) { return -1; }
      return 0;
    });
    tableDisplayData.forEach((element) => {
      const obj = {
        data: element.TotalConfirmed,
        name: element.Country,
        flag: element.flag,
      };
      array.push(obj);
    });
  createTable(array);
};

const sortCountryDataByClick = (event) => {
  if (event.target === buttonCountriesAllPeriod) {
    state.allPeriod = true;
  } else if (event.target === buttonCountriesToday) {
    state.allPeriod = false;
  } else if (event.target === buttonCountriesAbs) {
    state.absValue = true;
  } else if (event.target === buttonCountriesPerPopulation) {
    state.absValue = false;
  } else if (event.target === buttonCountriesConfirmed) {
    state.confirmed = true;
    state.recovered = false;
    state.deaths = false;
  } else if (event.target === buttonCountriesRecovered) {
    state.confirmed = false;
    state.recovered = true;
    state.deaths = false;
  } else if (event.target === buttonCountriesDeaths) {
    state.confirmed = false;
    state.recovered = false;
    state.deaths = true;
  }
  
  const array = [];
  const tableDisplayData = state.dataCovid.Countries;
  
  // if (event !== undefined && event.target.classList[0] === 'button__all-period-countries' && state.absValue === false) {
  //   state.absValue = true;
  // } else if (event !== undefined && event.target.classList[0] === 'button__last-day-countries' && state.absValue === true) {
  //   state.absValue = false;
  // }
  // const array = [];
  // const tableDisplayData = state.dataCovid.Countries;
  // if ((event === undefined || event.target.classList[0] === 'button__all-period-countries') && state.allPeriod === true && state.absValue === true) {
  //   tableDisplayData.sort((a, b) => {
  //     if (a.TotalConfirmed < b.TotalConfirmed) { return 1; }
  //     if (a.TotalConfirmed > b.TotalConfirmed) { return -1; }
  //     return 0;
  //   });
  //   tableDisplayData.forEach((element) => {
  //     const obj = {
  //       data: element.TotalConfirmed,
  //       name: element.Country,
  //       flag: element.flag,
  //     };
  //     array.push(obj);
  //   });
  // } else if ((event === undefined || event.target.classList[0] === 'button__last-day-countries') && state.allPeriod === true && state.absValue === false) {
  //   console.log('Сигнал:');
  //   tableDisplayData.sort((a, b) => {
  //     if (a.totalConfirmedAverage < b.totalConfirmedAverage) { return 1; }
  //     if (a.totalConfirmedAverage > b.totalConfirmedAverage) { return -1; }
  //     return 0;
  //   });
  //   tableDisplayData.forEach((element) => {
  //     const obj = {
  //       data: element.totalConfirmedAverage,
  //       name: element.Country,
  //       flag: element.flag,
  //     };
  //     array.push(obj);
  //   });
  // } else if (state.allPeriod === false && state.absValue === true) {
  //   tableDisplayData.sort((a, b) => {
  //     if (a.NewConfirmed < b.NewConfirmed) { return 1; }
  //     if (a.NewConfirmed > b.NewConfirmed) { return -1; }
  //     return 0;
  //   });
  //   tableDisplayData.forEach((element) => {
  //     const obj = {
  //       data: element.NewConfirmed,
  //       name: element.Country,
  //       flag: element.flag,
  //     };
  //     array.push(obj);
  //   });
  // } else if (state.allPeriod === false && state.absValue === false) {
  //   tableDisplayData.sort((a, b) => {
  //     if (a.todayConfirmedAverage < b.todayConfirmedAverage) { return 1; }
  //     if (a.todayConfirmedAverage > b.todayConfirmedAverage) { return -1; }
  //     return 0;
  //   });
  //   tableDisplayData.forEach((element) => {
  //     const obj = {
  //       data: element.todayConfirmedAverage,
  //       name: element.Country,
  //       flag: element.flag,
  //     };
  //     array.push(obj);
  //   });
  // }
  // if (state.absValue === false) {
  //   array.forEach((element) => {
  //     element.data = 
  //   });
  // }
  createTable(array);
};

document.querySelector('.data__wrap').addEventListener('click', (event) => sortCountryDataByClick(event));

export { sortCountryDataByDefault };
