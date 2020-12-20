import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { state } from './main';

let map = '';
let layerGroup = '';

const createMap = () => {
  const mapOptions = {
    center: [26.745610382199022, 22.148437500000004],
    zoom: 2,
    worldCopyJump: true,
  };

  map = new L.map('map', mapOptions);
  // var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  const layer = new L.TileLayer('https://api.mapbox.com/styles/v1/spokoinaya/ckiuh90qt2vig19pf9727arzf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3Bva29pbmF5YSIsImEiOiJja2l1Y2l6dWkwN2p1MnJwNHlmNG1lcTlwIn0.rqGaVERCjrMCex1b5rss4w');

  map.addLayer(layer);
};

const removeMarkerOnMap = () => {
  map.removeLayer(layerGroup);
};

const addMarkerOnMap = () => {
  let markerOne = '';
  let oneLayer = [];

  state.dataCountryInfo.forEach(item => {
    const iconOptions = typeOfMarker(item.cases);
  const customIcon = L.icon(iconOptions);
    const coordinates = [item.countryInfo.lat, item.countryInfo.long];
  const markerOptions = {
    title: `${item.country}, Total Confirmed: ${item.cases}`,
    riseOnHover: true,
    icon: customIcon,
  };
    markerOne = L.marker(coordinates, markerOptions);
    //L.marker(coordinates, markerOptions).addTo(map);
    oneLayer.push(markerOne);
  });
  console.log('oneLayer ', oneLayer);
  layerGroup = L.layerGroup(oneLayer);
  layerGroup.addTo(map);
};

const typeOfMarker = (caseNumber) => {
  let iconOptions = '';
  let iconSizeItem = '';
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
    iconUrl: './assets/images/circle.png',
    iconSize: iconSizeItem,
  };
  return iconOptions;
};

export { createMap, addMarkerOnMap, removeMarkerOnMap };
