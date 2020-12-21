const searchCountries = (menuData) => {
  let searchList = menuData.slice();
  searchList.sort((a, b) => a.name > b.name ? 1 : -1);
  console.log('Menu:', menuData, searchList);
  const search = document.querySelector('#search__field');
  const select = document.createElement('datalist');
  select.size = 10;
  select.id = 'menu';
  search.appendChild(select);

  searchList.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.name;
    option.setAttribute('data-id', element.id);
    option.setAttribute('data-iso', element.iso);
    option.innerText = element.name;
    select.appendChild(option);
  });
};

export { searchCountries };
