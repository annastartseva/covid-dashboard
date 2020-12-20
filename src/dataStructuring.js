import { sortCountryDataByDefault } from './dataSort';

const createDataStructure = (countriesDataArray) => {
  countriesDataArray.forEach((element) => {
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

export { createDataStructure };
