const getDataForGlobalTable = (totalConfirmed, totalRecover, totalDeaths, data) => {
  const totalConfirmedText = totalConfirmed;
  const totalRecoverText = totalRecover;
  const totalDeathsText = totalDeaths;
  totalConfirmedText.innerHTML = data.Global.TotalConfirmed.toLocaleString();
  totalRecoverText.innerHTML = data.Global.TotalRecovered.toLocaleString();
  totalDeathsText.innerHTML = data.Global.TotalDeaths.toLocaleString();
};

export default getDataForGlobalTable;
