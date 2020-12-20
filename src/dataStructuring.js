import { sortCountryDataByDefault } from './dataSort';

const createDataStructure = (dataArray, countriesDataArray) => {
  dataArray.Countries.forEach((element) => {
    countriesDataArray.forEach((item) => {
      if (element.Country === item.name) {
        element.population = item.population;
        element.flag = item.flag;
      }
      if (item.name === 'Cabo Verde') {
        dataArray.Countries[31].population = item.population;
        dataArray.Countries[31].flag = item.flag;
      }
      if (item.name === 'Bolivia (Plurinational State of)') {
        dataArray.Countries[20].population = item.population;
        dataArray.Countries[20].flag = item.flag;
      }
      if (item.name === 'Congo') {
        dataArray.Countries[38].population = item.population;
        dataArray.Countries[38].flag = item.flag;
      }
      if (item.name === 'Congo (Democratic Republic of the)') {
        dataArray.Countries[39].population = item.population;
        dataArray.Countries[39].flag = item.flag;
      }
      if (item.name === 'Holy See') {
        dataArray.Countries[72].population = item.population;
        dataArray.Countries[72].flag = item.flag;
      }
      if (item.name === 'Iran (Islamic Republic of)') {
        dataArray.Countries[78].population = item.population;
        dataArray.Countries[78].flag = item.flag;
      }
      if (item.name === 'Korea (Republic of)') {
        dataArray.Countries[88].population = item.population;
        dataArray.Countries[88].flag = item.flag;
      }
      if (item.name === 'Lao People\'s Democratic Republic') {
        dataArray.Countries[91].population = item.population;
        dataArray.Countries[91].flag = item.flag;
      }
      if (item.name === 'Macao') {
        dataArray.Countries[100].population = item.population;
        dataArray.Countries[100].flag = item.flag;
      }
      if (item.name === 'Macedonia (the former Yugoslav Republic of)') {
        dataArray.Countries[101].population = item.population;
        dataArray.Countries[101].flag = item.flag;
      }
      if (item.name === 'Moldova (Republic of)') {
        dataArray.Countries[112].population = item.population;
        dataArray.Countries[112].flag = item.flag;
      }
      if (item.name === 'Palestine, State of') {
        dataArray.Countries[129].population = item.population;
        dataArray.Countries[129].flag = item.flag;
      }
      if (item.name === 'Saint Vincent and the Grenadines') {
        dataArray.Countries[145].population = item.population;
        dataArray.Countries[145].flag = item.flag;
      }
      if (item.name === 'Syrian Arab Republic') {
        dataArray.Countries[168].population = item.population;
        dataArray.Countries[168].flag = item.flag;
      }
      if (item.name === 'Taiwan') {
        dataArray.Countries[169].population = item.population;
        dataArray.Countries[169].flag = item.flag;
      }
      if (item.name === 'United Kingdom of Great Britain and Northern Ireland') {
        dataArray.Countries[181].population = item.population;
        dataArray.Countries[181].flag = item.flag;
      }
      if (item.name === 'Venezuela (Bolivarian Republic of)') {
        dataArray.Countries[186].population = item.population;
        dataArray.Countries[186].flag = item.flag;
      }
    });
  });
  dataArray.Countries.forEach((element) => {
    element.totalConfirmedAverage = Math.round(element.TotalConfirmed / (element.population / 100000));
    element.todayConfirmedAverage = Math.round(element.NewConfirmed / (element.population / 100000));
    element.totalDeathsAverage = Math.round(element.TotalDeaths / (element.population / 100000));
    element.todayDeathsAverage = Math.round(element.NewDeaths / (element.population / 100000));
    element.totalRecoveredAverage = Math.round(element.TotalRecovered / (element.population / 100000));
    element.todayRecoveredAverage = Math.round(element.NewRecovered / (element.population / 100000));
  });
  sortCountryDataByDefault();
};

export { createDataStructure };
