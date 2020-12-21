import { searchCountries } from './search';

const createTable = (dataForCreation) => {
  console.log('create table:');
  if (document.querySelector('#countries__table')) {
    document.querySelector('#countries__table').remove();
  }
  // if (document.querySelector('#search__field')) {
  //   document.querySelector('#search__field').remove();
  // }

  const wrapper = document.querySelector('.wrap.table__city-list-wrap');

  // const searchField = document.createElement('input');
  // searchField.setAttribute('list', 'menu');
  // searchField.id = 'search__field';
  // wrapper.appendChild(searchField);

  const table = document.createElement('table');
  table.id = 'countries__table';
  wrapper.appendChild(table);

  const title = document.createElement('caption');
  title.id = 'countries__table-title';
  title.innerText = 'Cases by country';
  table.appendChild(title);

  dataForCreation.forEach((element) => {
    const row = document.createElement('tr');
    row.classList.add('countries__table-row');
    table.appendChild(row);

    const cellWithData = document.createElement('td');
    cellWithData.classList.add('countries__table-cell', 'data');
    cellWithData.innerText = element.data.toLocaleString();
    row.appendChild(cellWithData);

    const cellWithName = document.createElement('td');
    cellWithName.classList.add('countries__table-cell', 'data');
    cellWithName.innerText = element.name;
    row.appendChild(cellWithName);

    const cellWithFlag = document.createElement('td');
    cellWithFlag.classList.add('countries__table-cell', 'flag');
    row.appendChild(cellWithFlag);

    const flagImage = document.createElement('img');
    flagImage.classList.add('flag-image');
    flagImage.src = element.flag;
    cellWithFlag.appendChild(flagImage);
  });
  searchCountries(dataForCreation);
};

export { createTable };
