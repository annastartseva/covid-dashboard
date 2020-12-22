import { state } from './main';

const searchProcess = () => {
  if (document.querySelector('.menu')) {
    document.querySelector('.menu').remove();
  }
  const searchList = state.dataList.slice();
  searchList.sort((a, b) => (a.name > b.name ? 1 : -1));
  const input = document.querySelector('#search__field');
  const wrapper = document.querySelector('.table__city-list-wrap');
  const select = document.createElement('div');
  select.classList.add('menu', 'show');
  wrapper.appendChild(select);

  searchList.forEach((element, index) => {
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
  document.querySelector('#search__field').addEventListener('focus', () => document.querySelector('.menu').classList.add('show'));
  document.querySelector('#search__field').addEventListener('blur', () => document.querySelector('.menu').classList.remove('show'));
  document.querySelector('#search__field').addEventListener('change', () => alert('smth'));
};

export { searchCountries, searchProcess };
