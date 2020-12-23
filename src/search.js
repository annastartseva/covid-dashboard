import { state } from './main';
import { changeInfoByClickOnMap } from './globalTable';
import { createDataStructureForChart } from './dataStructuring';
import { myChart } from './chartTable';

const searchProcess = () => {
  if (document.querySelector('.menu')) {
    document.querySelector('.menu').remove();
  }
  const searchList = state.dataList.slice();
  searchList.forEach((element, index) => {
    if (element.name === 'Palestine' || element.name === 'Western Sahara' || element.name === 'Wallis and Futuna') {
      searchList.splice(index, 1);
    }
  });
  searchList.sort((a, b) => (a.name > b.name ? 1 : -1));
  const input = document.querySelector('#search__field');
  const wrapper = document.querySelector('.table__city-list-wrap');
  const select = document.createElement('div');
  select.classList.add('menu', 'show');
  wrapper.appendChild(select);
  searchList.forEach((element) => {
    state.dataCountryInfoDates.forEach((item) => {
      if (element.name === 'Australia' && item.country === 'Australia' && item.province === 'new south wales') {
        element.information = item.timeline;
      }
      if (element.name === 'Canada' && item.country === 'Canada' && item.province === 'ontario') {
        element.information = item.timeline;
      }
      if (element.name === 'China' && item.country === 'China' && item.province === 'guangdong') {
        element.information = item.timeline;
      }
      if (element.name === 'Denmark' && item.country === 'Denmark' && item.province === null) {
        element.information = item.timeline;
      }
      if (element.name === 'France' && item.country === 'France' && item.province === null) {
        element.information = item.timeline;
      }
      if (element.name === 'Netherlands' && item.country === 'Netherlands' && item.province === null) {
        element.information = item.timeline;
      }
      if (element.name === 'UK' && item.country === 'UK' && item.province === null) {
        element.information = item.timeline;
      }
      if (element.name === 'Myanmar' && item.country === 'Burma') {
        element.information = item.timeline;
      }
      if (element.name === 'French Polynesia' && item.country === 'France' && item.province === 'french polynesia') {
        element.information = item.timeline;
      }
      if (element.name === 'French Guiana' && item.country === 'France' && item.province === 'french guiana') {
        element.information = item.timeline;
      }
      if (element.name === 'Réunion' && item.country === 'France' && item.province === 'reunion') {
        element.information = item.timeline;
      }
      if (element.name === 'Guadeloupe' && item.country === 'France' && item.province === 'guadeloupe') {
        element.information = item.timeline;
      }
      if (element.name === 'Mayotte' && item.country === 'France' && item.province === 'mayotte') {
        element.information = item.timeline;
      }
      if (element.name === 'Saint Martin' && item.country === 'France' && item.province === 'st martin') {
        element.information = item.timeline;
      }
      if (element.name === 'St. Barth' && item.country === 'France' && item.province === 'saint barthelemy') {
        element.information = item.timeline;
      }
      if (element.name === 'New Caledonia' && item.country === 'France' && item.province === 'new caledonia') {
        element.information = item.timeline;
      }
      if (element.name === 'Saint Pierre Miquelon' && item.country === 'France' && item.province === 'saint pierre and miquelon') {
        element.information = item.timeline;
      }
      if (element.name === 'Martinique' && item.country === 'France' && item.province === 'martinique') {
        element.information = item.timeline;
      }
      if (element.name === 'Hong Kong' && item.country === 'China' && item.province === 'hong kong') {
        element.information = item.timeline;
      }
      if (element.name === 'Macao' && item.country === 'China' && item.province === 'macau') {
        element.information = item.timeline;
      }
      if (element.name === 'Aruba' && item.country === 'Netherlands' && item.province === 'aruba') {
        element.information = item.timeline;
      }
      if (element.name === 'Curaçao' && item.country === 'Netherlands' && item.province === 'curacao') {
        element.information = item.timeline;
      }
      if (element.name === 'Sint Maarten' && item.country === 'Netherlands' && item.province === 'sint maarten') {
        element.information = item.timeline;
      }
      if (element.name === 'Caribbean Netherlands' && item.country === 'Netherlands' && item.province === 'bonaire, sint eustatius and saba') {
        element.information = item.timeline;
      }
      if (element.name === 'Channel Islands' && item.country === 'UK' && item.province === 'channel islands') {
        element.information = item.timeline;
      }
      if (element.name === 'Gibraltar' && item.country === 'UK' && item.province === 'gibraltar') {
        element.information = item.timeline;
      }
      if (element.name === 'Turks and Caicos Islands' && item.country === 'UK' && item.province === 'turks and caicos islands') {
        element.information = item.timeline;
      }
      if (element.name === 'Bermuda' && item.country === 'UK' && item.province === 'bermuda') {
        element.information = item.timeline;
      }
      if (element.name === 'Isle of Man' && item.country === 'UK' && item.province === 'isle of man') {
        element.information = item.timeline;
      }
      if (element.name === 'Cayman Islands' && item.country === 'UK' && item.province === 'cayman islands') {
        element.information = item.timeline;
      }
      if (element.name === 'British Virgin Islands' && item.country === 'UK' && item.province === 'british virgin islands') {
        element.information = item.timeline;
      }
      if (element.name === 'Falkland Islands (Malvinas)' && item.country === 'UK' && item.province === 'falkland islands (malvinas)') {
        element.information = item.timeline;
      }
      if (element.name === 'Montserrat' && item.country === 'UK' && item.province === 'montserrat') {
        element.information = item.timeline;
      }
      if (element.name === 'Anguilla' && item.country === 'UK' && item.province === 'anguilla') {
        element.information = item.timeline;
      }
      if (element.name === 'Faroe Islands' && item.country === 'Denmark' && item.province === 'faroe islands') {
        element.information = item.timeline;
      }
      if (element.name === 'Greenland' && item.country === 'Denmark' && item.province === 'greenland') {
        element.information = item.timeline;
      }
      if (element.name === 'Holy See (Vatican City State)' && item.country === 'Holy See') {
        element.information = item.timeline;
      }
      if (element.name === item.country) {
        element.information = item.timeline;
      }
    });
  });
  searchList.forEach((element, index) => {
    if (input.value.length === element.name.length
    && element.name.toUpperCase().startsWith(input.value.toUpperCase())
    && element.name.toUpperCase().endsWith(input.value.toUpperCase())) {
      state.countryId = element.iso;
      state.allWorld = false;
      changeInfoByClickOnMap();
      createDataStructureForChart(element);
      myChart.remove();
    }
    if (element.name.toUpperCase().startsWith(input.value.toUpperCase())) {
      const option = document.createElement('div');
      option.classList.add('menu-option');
      option.value = element.name;
      option.setAttribute('data-id', element.id);
      option.setAttribute('data-iso', element.iso);
      option.innerText = element.name;
      document.querySelector('.menu').appendChild(option);
      if (index % 2 === 0) {
        option.classList.add('dark');
      } else {
        option.classList.add('black');
      }
    }
  });
};

const searchCountries = (menuData) => {
  const searchList = menuData.slice();
  searchList.forEach((element, index) => {
    if (element.name === 'Palestine' || element.name === 'Western Sahara' || element.name === 'Wallis and Futuna') {
      searchList.splice(index, 1);
    }
  });
  searchList.sort((a, b) => (a.name > b.name ? 1 : -1));
  const wrapper = document.querySelector('.table__city-list-wrap');
  const select = document.createElement('div');
  select.classList.add('menu');
  wrapper.appendChild(select);

  searchList.forEach((element, index) => {
    const option = document.createElement('div');
    option.classList.add('menu-option');
    option.value = element.name;
    option.setAttribute('data-id', element.id);
    option.setAttribute('data-iso', element.iso);
    option.innerText = element.name;
    select.appendChild(option);
    if (index % 2 === 0) {
      option.classList.add('dark');
    } else {
      option.classList.add('black');
    }
  });

  document.querySelector('#search__field').addEventListener('input', searchProcess);
  document.querySelector('#search__field').addEventListener('focus', () => 
    {
      document.querySelector('.menu').classList.add('show');
      document.querySelector('.keyboard').classList.remove('off');
      document.querySelector('.keyboard').classList.add('on');
    });
  document.querySelector('#search__field').addEventListener('blur', () => {
    document.querySelector('.menu').classList.remove('show');
    document.querySelector('.keyboard').classList.remove('on');
    document.querySelector('.keyboard').classList.add('off');
  });
};

export { searchCountries, searchProcess };
