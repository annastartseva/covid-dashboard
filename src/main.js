import getDataForGlobalTable from './globalTable';

// const url
const urlSummary = 'https://api.covid19api.com/summary';

// data from API
let data = '';

let setDataToTableGlobal = '';

async function getSummaryGlobalData() {
  console.log('function getSummaryGlobalData');
  const url = urlSummary;
  const res = await fetch(url);
  data = await res.json();
  console.log('TotalConfirmed: ', data.Global.TotalConfirmed);
  console.log('TotalDeaths: ', data.Global.TotalDeaths);
  console.log('TotalRecovered: ', data.Global.TotalRecovered);
  setDataToTableGlobal();
}

// first page load
const firstPageLoad = () => {
  getSummaryGlobalData();
};

setDataToTableGlobal = () => {
  getDataForGlobalTable(data);
};

firstPageLoad();

export default getSummaryGlobalData;
