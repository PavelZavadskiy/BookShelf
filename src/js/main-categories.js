import { getCategoryList, getTopBooks, getCategory, getBookById } from './api-books';
import { makeBlocks, makeTopBlocks } from './main-blocks';

const mainCategoriesList = document.querySelector('.main-categories-list');

(() => {
  getCategoryList().then(result => {
    const markup = result.data
      .map(item => {
        return `<li class="main-categories-list-item">${item.list_name}</li>`;
      })
      .join('');
    mainCategoriesList.innerHTML =
      '<li class="main-categories-list-item main-categories-list-item-active">All categories</li>' + markup;
  });
})();

mainCategoriesList.addEventListener('click', event => {
  if (event.target.classList.contains('main-categories-list-item')) {
    for (const item of mainCategoriesList.children) {
      item.classList.remove('main-categories-list-item-active');
    }
    event.target.classList.add('main-categories-list-item-active');

    if (event.target.textContent === 'All categories') {
      getTopBooks().then(result => {
        makeTopBlocks(result);
      });
    } else {
      getCategory(event.target.textContent).then(result => {
        makeBlocks(result, event.target.textContent);
      });
    }
  }
});
