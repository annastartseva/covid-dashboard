import { searchCountries } from './search';
import { state } from './main';

const createTable = (dataForCreation) => {
  state.dataList = dataForCreation;
  if (document.querySelector('#table__wrapper')) {
    document.querySelector('#table__wrapper').remove();
  }

  const wrapper = document.querySelector('.countries__table-wrap');
  const tableWrapper = document.createElement('div');
  tableWrapper.id = 'table__wrapper';
  const table = document.createElement('table');
  table.id = 'countries__table';
  tableWrapper.appendChild(table);
  wrapper.appendChild(tableWrapper);

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
