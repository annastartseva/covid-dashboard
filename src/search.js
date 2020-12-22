const searchProcess = (event) => {
  const input = document.querySelector('#search__field');
  const options = document.querySelectorAll('.menu-option');
console.log('smth', input.value, event);
  options.forEach((element) => {
    if (element.innerText.toUpperCase().startsWith(input.value.toUpperCase())) {
      element.removeAttribute('disabled', '');
    } else {
      element.setAttribute('disabled', '');
    }
  });
};

const searchCountries = (menuData) => {
  const searchList = menuData.slice();
  searchList.sort((a, b) => (a.name > b.name ? 1 : -1));
  const search = document.querySelector('#search__field');
  const select = document.createElement('datalist');
  // select.size = 10;
  select.id = 'menu';
  search.appendChild(select);

  searchList.forEach((element) => {
    const option = document.createElement('option');
    option.classList.add('menu-option');
    option.value = element.name;
    option.setAttribute('data-id', element.id);
    option.setAttribute('data-iso', element.iso);
    option.innerText = element.name;
    select.appendChild(option);
  });
  document.querySelector('#search__field').addEventListener('input', searchProcess);
  document.querySelector('#search__field').addEventListener('change', searchProcess);
};

export { searchCountries };
