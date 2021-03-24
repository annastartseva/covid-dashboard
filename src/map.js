import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { state } from './main';
import { changeInfoByClickOnMap } from './globalTable';

let map = '';
let layerGroup = '';
let info = '';
let infoDiv = '';
let legend = '';
let legendDiv = '';
let urlSize = '';
const grades = [1, 10000, 200000, 500000, 1000000, 3000000];

const createMap = () => {
  const mapOptions = {
    center: [26.745610382199022, 22.148437500000004],
    zoom: 2,
    worldCopyJump: true,
    attributionControl: false,
    minZoom: 2,
  };

  map = new L.map('map', mapOptions);
  const layer = new L.TileLayer('https://api.mapbox.com/styles/v1/spokoinaya/ckiuh90qt2vig19pf9727arzf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3Bva29pbmF5YSIsImEiOiJja2l1Y2l6dWkwN2p1MnJwNHlmNG1lcTlwIn0.rqGaVERCjrMCex1b5rss4w');
  map.addLayer(layer);
};

const changeMapSize = () => {
  map.invalidateSize();
};

const highlightFeature = (e) => {
  const layer = e.target;

  layer.setStyle({
    weight: 1,
    color: '#858585',
    fillOpacity: 0.4,
  });

  info.update(e.sourceTarget.feature.properties.iso_a2);

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
};

const resetHighlight = (e) => {
  const layer = e.target;

  layer.setStyle({
    color: '#353535',
    weight: 0,
    fillOpacity: 0.1,
  });
};

const getCountryId = (e) => {
  state.countryId = e.sourceTarget.feature.properties.iso_a2;
  state.allWorld = false;
  changeInfoByClickOnMap();
};

const onEachFeatureFunc = (feature, layer) => {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: getCountryId,
  });
};

const selectVariable = () => {
  let data = '';
  if (state.allPeriod === true) {
    if (state.confirmed === true) {
      data = ['cases', 'Total Confirmed'];
    } else if (state.recovered === true) {
      data = ['recovered', 'Total Recovered'];
    } else if (state.deaths === true) {
      data = ['deaths', 'Total Deaths'];
    }
  } else if (state.allPeriod === false) {
    if (state.confirmed === true) {
      data = ['todayCases', 'Today Confirmed'];
    } else if (state.recovered === true) {
      data = ['todayRecovered', 'Today Recovered'];
    } else if (state.deaths === true) {
      data = ['todayDeaths', 'Today Deaths'];
    }
  }
  return data;
};

const typeOfMarker = (caseNumber) => {
  let iconOptions = '';
  let iconSizeItem = '';
  let iconUrlVariable = '';
  if (state.confirmed === true) {
    iconUrlVariable = './assets/images/circle.png';
  } else if (state.recovered === true) {
    iconUrlVariable = './assets/images/marker_recover.png';
  } else if (state.deaths === true) {
    iconUrlVariable = './assets/images/marker_deaths.png';
  }
  if (caseNumber <= 10000) {
    iconSizeItem = [10, 10];
  } else if (caseNumber > 10000 && caseNumber <= 200000) {
    iconSizeItem = [14, 14];
  } else if (caseNumber > 200000 && caseNumber <= 500000) {
    iconSizeItem = [18, 18];
  } else if (caseNumber > 500000 && caseNumber <= 1000000) {
    iconSizeItem = [22, 22];
  } else if (caseNumber > 1000000 && caseNumber <= 3000000) {
    iconSizeItem = [26, 26];
  } else if (caseNumber > 3000000) {
    iconSizeItem = [30, 30];
  }
  iconOptions = {
    iconUrl: iconUrlVariable,
    iconSize: iconSizeItem,
  };
  return iconOptions;
};

const createTooltipText = (iso) => {
  const data = state.dataCountryInfo;
  const countryId = data.map((item) => item.countryInfo.iso2);
  const idCountryId = countryId.indexOf(iso);
  const tooltipText = selectVariable();
  const numberCase = state.dataCountryInfo[idCountryId][tooltipText[0]];
  const population = state.dataCountryInfo[idCountryId].population;
  let number = '';
  if (state.absValue === true) {
    number = numberCase;
  } else if (state.absValue === false) {
    number = ((numberCase / population) * 100000).toFixed(2);
  }
  const country = state.dataCountryInfo[idCountryId].country;
  return [number, country, tooltipText[1]];
};

const createInfoPopup = () => {
  info = L.control();

  info.onAdd = () => {
    infoDiv = L.DomUtil.create('div', 'info');
    infoDiv.innerHTML = '<h4>Covid Information</h4> Hover over a country';
    return infoDiv;
  };

  info.update = (iso) => {
    const data = createTooltipText(iso);
    infoDiv.innerHTML = `<h4>Covid Information</h4>${data[1]} =>  ${data[2]}:  ${data[0].toLocaleString()}`;
  };

  info.addTo(map);
};

const addCountryContur = () => {
  const geoJsonData = state.dataGeoJson;
  const myStyle = {
    color: '#353535',
    weight: 0,
    opacity: 0.4,
    dashArray: 3,
    fillColor: '#353535',
    fillOpacity: 0.1,
  };
  L.geoJSON(geoJsonData, {
    style: myStyle,
    onEachFeature: onEachFeatureFunc,
  }).addTo(map);
  createInfoPopup();
};

const removeMarkerOnMap = () => {
  map.removeLayer(layerGroup);
};

const removeLegend = () => {
  if (legendDiv.firstChild) {
    while (legendDiv.firstChild) {
      legendDiv.removeChild(legendDiv.firstChild);
    }
  }
};

const changeLegend = () => {
  for (let i = 0; i < grades.length; i += 1) {
    urlSize = typeOfMarker(grades[i] + 10);
    let symbol = '';
    if (grades[i + 1]) {
      symbol = `&ndash;${grades[i + 1].toLocaleString()}`;
    } else {
      symbol = '+';
    }
    legendDiv.innerHTML
      += `<div class ="legend_string">
      <div class="legend_img" >
      <img src="${urlSize.iconUrl}" alt="icon_circle" 
      width="${urlSize.iconSize[0]}" height="${urlSize.iconSize[0]}"></div> 
      <div class ="legend_text">${grades[i].toLocaleString()}${symbol}</div></div>`;
  }
};

const createLegend = () => {
  legend = L.control({ position: 'bottomleft' });

  legend.onAdd = () => {
    legendDiv = L.DomUtil.create('div', 'info legend');

    for (let i = 0; i < grades.length; i += 1) {
      urlSize = typeOfMarker(grades[i] + 10);
      let symbol = '';
      if (grades[i + 1]) {
        symbol = `&ndash;${grades[i + 1].toLocaleString()}`;
      } else {
        symbol = '+';
      }
      legendDiv.innerHTML
      += `<div class ="legend_string">
      <div class="legend_img" >
      <img src="${urlSize.iconUrl}" alt="icon_circle" 
      width="${urlSize.iconSize[0]}" height="${urlSize.iconSize[0]}"></div> 
      <div class ="legend_text">${grades[i].toLocaleString()}${symbol}</div></div>`;
    }
    return legendDiv;
  };
  legend.addTo(map);
};

const addMarkerOnMap = () => {
  let markerOne = '';
  const oneLayer = [];
  const displayedData = selectVariable();
  const displayedNumber = displayedData[0];
  const displayedReason = displayedData[1];
  let iconOptions = '';

  state.dataCountryInfo.forEach((item) => {
    if (item[displayedNumber] > 0 && item.population > 0) {
      let number = '';
      if (state.absValue === true) {
        number = item[displayedNumber];
      } else if (state.absValue === false) {
        number = (item[displayedNumber] / item.population) * 100000;
        number = number.toFixed(2);
      }
      iconOptions = typeOfMarker(number);
      const customIcon = L.icon(iconOptions);
      const coordinates = [item.countryInfo.lat, item.countryInfo.long];
      const markerOptions = {
        title: `${item.country}, ${displayedReason}: ${number.toLocaleString()}`,
        riseOnHover: true,
        icon: customIcon,
      };
      markerOne = L.marker(coordinates, markerOptions);
      oneLayer.push(markerOne);

      markerOne.on('click', () => {
        state.countryId = item.countryInfo.iso2;
        state.allWorld = false;
        changeInfoByClickOnMap();
      });
    }
  });
  layerGroup = L.layerGroup(oneLayer);
  layerGroup.addTo(map);
};

export {
  createMap, addMarkerOnMap, createLegend, changeMapSize,
  removeMarkerOnMap, addCountryContur, changeLegend, removeLegend,
};
