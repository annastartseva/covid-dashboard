import { state } from './main';
import { sortCountryDataByDefault } from './dataSort';
import { createChart } from './chartTable';

const createDataStructure = (countriesDataArray) => {
  const array = countriesDataArray;
  array.forEach((element) => {
    element.totalConfirmedAverage = Math.round(element.casesPerOneMillion * 10) / 100;
    element.totalDeathsAverage = Math.round(element.deathsPerOneMillion * 10) / 100;
    element.totalRecoveredAverage = Math.round(element.recoveredPerOneMillion * 10) / 100;
    if (element.population === 0) {
      element.todayConfirmedAverage = 0;
      element.todayDeathsAverage = 0;
      element.todayRecoveredAverage = 0;
    } else {
      element.todayConfirmedAverage = Math.round((element.todayCases
        / (element.population / 100000)) * 100) / 100;
      element.todayDeathsAverage = Math.round((element.todayDeaths
        / (element.population / 100000)) * 100) / 100;
      element.todayRecoveredAverage = Math.round((element.todayRecovered
        / (element.population / 100000)) * 100) / 100;
    }
  });
  sortCountryDataByDefault();
};

const createDataStructureForChart = (dataCovidDates) => {
  console.log('data', dataCovidDates);
  const period = state.allPeriod;
  const value = state.absValue;
  const confirmed = state.confirmed;
  const deaths = state.deaths;
  const recovered = state.recovered;
  const population = state.dataCovid.population;
  let outputData = [];
  const intermediateArray = [];

  if (period === true && value === true && confirmed === true) {
    outputData = Object.entries(dataCovidDates.cases);
  } else if (period === false && value === true && confirmed === true) {
    const array = Object.entries(dataCovidDates.cases);
    array.forEach((element, index) => {
      if (index === 0) {
        outputData.push([element[0], element[1]]);
      } else {
        outputData.push([element[0], element[1] - array[index - 1][1]]);
      }
    });
  } else if (period === true && value === false && confirmed === true) {
    const array = Object.entries(dataCovidDates.cases);
    array.forEach((element) => {
      outputData.push([element[0], Math.round((element[1] / (population / 100000)) * 100) / 100]);
    });
  } else if (period === false && value === false && confirmed === true) {
    const array = Object.entries(dataCovidDates.cases);
    array.forEach((element, index) => {
      if (index === 0) {
        intermediateArray.push([element[0], element[1]]);
      } else {
        intermediateArray.push([element[0], element[1] - array[index - 1][1]]);
      }
    });
    intermediateArray.forEach((element) => {
      outputData.push([element[0], Math.round((element[1] / (population / 100000)) * 100) / 100]);
    });
  } else if (period === true && value === true && deaths === true) {
    outputData = Object.entries(dataCovidDates.deaths);
  } else if (period === false && value === true && deaths === true) {
    const array = Object.entries(dataCovidDates.deaths);
    array.forEach((element, index) => {
      if (index === 0) {
        outputData.push([element[0], element[1]]);
      } else {
        outputData.push([element[0], element[1] - array[index - 1][1]]);
      }
    });
  } else if (period === true && value === false && deaths === true) {
    const array = Object.entries(dataCovidDates.deaths);
    array.forEach((element) => {
      outputData.push([element[0], Math.round((element[1] / (population / 100000)) * 100) / 100]);
    });
  } else if (period === false && value === false && deaths === true) {
    const array = Object.entries(dataCovidDates.cases);
    array.forEach((element, index) => {
      if (index === 0) {
        intermediateArray.push([element[0], element[1]]);
      } else {
        intermediateArray.push([element[0], element[1] - array[index - 1][1]]);
      }
    });
    intermediateArray.forEach((element) => {
      outputData.push([element[0], Math.round((element[1] / (population / 100000)) * 100) / 100]);
    });
  } else if (period === true && value === true && recovered === true) {
    outputData = Object.entries(dataCovidDates.recovered);
  } else if (period === false && value === true && recovered === true) {
    const array = Object.entries(dataCovidDates.recovered);
    array.forEach((element, index) => {
      if (index === 0) {
        outputData.push([element[0], element[1]]);
      } else {
        outputData.push([element[0], element[1] - array[index - 1][1]]);
      }
    });
  } else if (period === true && value === false && recovered === true) {
    const array = Object.entries(dataCovidDates.recovered);
    array.forEach((element) => {
      outputData.push([element[0], Math.round((element[1] / (population / 100000)) * 100) / 100]);
    });
  } else if (period === false && value === false && recovered === true) {
    const array = Object.entries(dataCovidDates.cases);
    array.forEach((element, index) => {
      if (index === 0) {
        intermediateArray.push([element[0], element[1]]);
      } else {
        intermediateArray.push([element[0], element[1] - array[index - 1][1]]);
      }
    });
    intermediateArray.forEach((element) => {
      outputData.push([element[0], Math.round((element[1] / (population / 100000)) * 100) / 100]);
    });
  }
  createChart(outputData);
};

export { createDataStructure, createDataStructureForChart };
