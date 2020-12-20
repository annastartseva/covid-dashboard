import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { state } from './main';

let map = '';

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

const createMarkerDataFile = () => {
  setTimeout(() => {
    console.log('function createMarkerDataFile');
    const data = state.dataCountryCoordinates;
    const dataForMap = [];
    const hasData = Array.isArray(data) && data.length > 0;
    if (!hasData) return;

    data.forEach((item) => {
      const obj = {
        country: item.country,
        countryCode: item.countryInfo.iso2,
        // _id: item.countryInfo._id,
        coordinates: [item.countryInfo.lat, item.countryInfo.long],
      };
      dataForMap.push(obj);
    });

    console.log('dataForMap ', dataForMap);
    state.dataCountryForMap = dataForMap;
    updateMarkerDataFile();
  }, 1000);
};

const updateMarkerDataFile = () => {
  console.log('function updateMarkerDataFile');
  const data = state.dataCountryForMap;
  const dataCovidCountries = state.dataCovid.Countries;
  const positionId = data.map((item) => item.countryCode);

  dataCovidCountries.forEach((item, index) => {
    const idCountryId = positionId.indexOf(item.CountryCode);

    if (idCountryId >= 0) {
      state.dataCovid.Countries[index].coordinates = data[idCountryId].coordinates;
    }
  });
  console.log('state.dataCovid ', state.dataCovid);
  addMarkerOnMap();
};

const addMarkerOnMap = () => {
  state.dataCovid.Countries.forEach(item => {
    // console.log('item ', item);
    if (item.coordinates) {
      const iconOptions = typeOfMarker(item.TotalConfirmed);
      const customIcon = L.icon(iconOptions);
      const coordinates = item.coordinates;
      const markerOptions = {
        title: `${item.Country}, TotalConfirmed: ${item.TotalConfirmed}`,
        riseOnHover: true,
        icon: customIcon,
      };

      L.marker(coordinates, markerOptions).addTo(map);
    }
  });
};

const typeOfMarker = (caseNumber) => {
  let iconOptions = '';
  let iconSizeItem = '';
  if (caseNumber <= 10000) {
    iconSizeItem = [5, 5];
  } else if (caseNumber > 10000 && caseNumber <= 200000) {
    iconSizeItem = [10, 10];
  } else if (caseNumber > 200000 && caseNumber <= 500000) {
    iconSizeItem = [15, 15];
  } else if (caseNumber > 500000 && caseNumber <= 1000000) {
    iconSizeItem = [20, 20];
  } else if (caseNumber > 1000000 && caseNumber <= 3000000) {
    iconSizeItem = [25, 25];
  } else if (caseNumber > 3000000) {
    iconSizeItem = [30, 30];
  }
  iconOptions = {
    iconUrl: './assets/images/circle.png',
    iconSize: iconSizeItem,
  };
  return iconOptions;
};

export { createMap, createMarkerDataFile };
