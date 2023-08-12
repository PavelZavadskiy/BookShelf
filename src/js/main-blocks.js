import { getCategory, getBookById } from './api-books';
import { scrollUp } from './utilites';
import { isSignIn, getUserShoppingList, updateUserShoppingList } from './api-firebase';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import './auth-reg-modal';

const mainBlocks = document.querySelector('.main-blocks');
const mainBlocksTitle = document.querySelector('.main-blocks-title');
const mainBlocksList = document.querySelector('.main-blocks-list');

const mainTopBlocks = document.querySelector('.main-top-blocks');
const mainTopBlocksTitle = document.querySelector('.main-top-blocks-title');
const mainTopBlocksList = document.querySelector('.main-top-blocks-list');

const mainShoppinglistBloks = document.querySelector('.main-shoppinglist-bloks');

const makeBlocks = (object, title) => {
  mainShoppinglistBloks.classList.add('visually-hidden');
  mainTopBlocks.classList.add('visually-hidden');
  mainBlocks.classList.remove('visually-hidden');
  mainBlocksTitle.textContent = title;

  const markup = object.data
    .map(item => {
      return `<li class="main-block-list-item">
                <a class="main-block-list-item-link link" id="${item._id}">
                  <div class="main-block-list-item-img-box">
                    <img class="main-block-list-item-img" loading="lazy" src="${item.book_image}" alt="${
        item.author + ' ' + item.title
      }">
                  </div>
                  <p class="main-block-list-item-title">${item.title}</p>
                  <p class="main-block-list-item-author">${item.author}</p>
                </a>
              </li>`;
    })
    .join('');
  mainBlocksList.innerHTML = markup;
};

const makeTopBlocks = object => {
  mainTopBlocks.classList.remove('visually-hidden');
  mainBlocks.classList.add('visually-hidden');
  mainShoppinglistBloks.classList.add('visually-hidden');

  mainTopBlocksTitle.textContent = 'Best Sellers Books';
  const markup = object.data
    .map(item => {
      return `<li class="main-top-blocks-list-item">
                <h2  class="main-top-blocks-list-category">${item.list_name}</h2>
                  <ul class="main-top-blocks-list-books list">
                  ${renderingBooks(item)}
                  </ul>
                <button class="main-top-blocks-list-more" type="button">See more</button>
              </li>`;
    })
    .join('');
  mainTopBlocksList.innerHTML = markup;
};

const renderingBooks = categories => {
  let booksMarkUp = '';
  let count = categories.books.length > 5 ? 5 : categories.books.length;
  for (let i = 0; i < count; i++) {
    booksMarkUp += `
      <li class="main-top-blocks-list-books-item">
        <a class="main-top-blocks-list-item-link link" id="${categories.books[i]._id}">
          <div class="main-top-blocks-list-item-img-box">
            <img class="main-top-blocks-list-item-img" loading="lazy" src="${categories.books[i].book_image}" alt="${
      categories.books[i].author + ' ' + categories.books[i].title
    }">
          </div>
          <p class="main-top-blocks-list-item-title">${categories.books[i].title}</p>
          <p class="main-top-blocks-list-item-author">${categories.books[i].author}</p>
        </a>
      </li>
    `;
  }
  return booksMarkUp;
};

mainBlocks.addEventListener('click', evt => {
  if (evt.target.closest('a')) {
    createModalBookItem(evt.target.closest('a').id);
  }
});

mainTopBlocks.addEventListener('click', evt => {
  if (evt.target.classList.contains('main-top-blocks-list-more')) {
    const category = evt.target.parentNode.firstElementChild.textContent;

    const mainCategoriesList = document.querySelector('.main-categories-list');
    for (const item of mainCategoriesList.children) {
      item.classList.remove('main-categories-list-item-active');
      if (item.textContent === category) item.classList.add('main-categories-list-item-active');
    }

    getCategory(category).then(result => {
      makeBlocks(result, category);
    });
    scrollUp();
  }

  if (evt.target.closest('a')) {
    createModalBookItem(evt.target.closest('a').id);
  }
});

const createModalBookItem = id => {
  getBookById(id).then(result => {
    const modalBookItem = document.querySelector('.modal-book-item');
    modalBookItem.classList.remove('visually-hidden');

    const modalBookItemImg = document.querySelector('.modal-book-item-img');
    modalBookItemImg.src = result.data.book_image;
    const modalBookItemBodyTitle = document.querySelector('.modal-book-item-body-title');
    modalBookItemBodyTitle.textContent = result.data.title;
    const modalBookItemBodyAuthor = document.querySelector('.modal-book-item-body-author');
    modalBookItemBodyAuthor.textContent = result.data.author;
    const modalBookItemBodyDescription = document.querySelector('.modal-book-item-body-description');
    modalBookItemBodyDescription.textContent = result.data.description;
    const modalBookItemBodyLinkAmazon = document.querySelector('.modal-book-item-body-link-amazon');
    modalBookItemBodyLinkAmazon.classList.add('visually-hidden');
    const modalBookItemBodyLinkApple = document.querySelector('.modal-book-item-body-link-apple');
    modalBookItemBodyLinkApple.classList.add('visually-hidden');
    const modalBookItemBodyLinkBookshop = document.querySelector('.modal-book-item-body-link-bookshop');
    modalBookItemBodyLinkBookshop.classList.add('visually-hidden');
    for (let link of result.data.buy_links) {
      if (link.name === 'Amazon') {
        modalBookItemBodyLinkAmazon.href = link.url;
        modalBookItemBodyLinkAmazon.classList.remove('visually-hidden');
      } else if (link.name === 'Apple Books') {
        modalBookItemBodyLinkApple.href = link.url;
        modalBookItemBodyLinkApple.classList.remove('visually-hidden');
      } else if (link.name === 'Bookshop') {
        modalBookItemBodyLinkBookshop.href = link.url;
        modalBookItemBodyLinkBookshop.classList.remove('visually-hidden');
      }
    }

    const modalBookItemShoppinhlistAdd = document.querySelector('.modal-book-item-shoppinhlist-add');
    const modalBookItemShoppinhlistRemove = document.querySelector('.modal-book-item-shoppinhlist-remove');
    const modalBookItemShoppinhlistRemoveParagraph = document.querySelector(
      '.modal-book-item-shoppinhlist-remove-paragraph'
    );
    const modalBookItemShoppinhlistBtnBox = document.querySelector('.modal-book-item-shoppinhlist-btn-box');
    modalBookItemShoppinhlistAdd.classList.add('visually-hidden');
    modalBookItemShoppinhlistRemove.classList.add('visually-hidden');
    modalBookItemShoppinhlistRemoveParagraph.classList.add('visually-hidden');

    let shopingList = null;

    if (!isSignIn()) {
      modalBookItemShoppinhlistBtnBox.classList.add('visually-hidden');
    } else {
      console.log('isSignIn()');
      getUserShoppingList()
        .then(respShoppingList => {
          shopingList = respShoppingList.data().shoppingList.slice();

          if (shopingList.find(item => item._id === result.data._id) == undefined) {
            modalBookItemShoppinhlistAdd.classList.remove('visually-hidden');
            modalBookItemShoppinhlistRemove.classList.add('visually-hidden');
            modalBookItemShoppinhlistRemoveParagraph.classList.add('visually-hidden');
          } else {
            modalBookItemShoppinhlistAdd.classList.add('visually-hidden');
            modalBookItemShoppinhlistRemove.classList.remove('visually-hidden');
            modalBookItemShoppinhlistRemoveParagraph.classList.remove('visually-hidden');
          }
        })
        .catch(errShoppingList => {
          console.log(`1`);
          Notify.failure(errShoppingList);
          modalBookItemShoppinhlistBtnBox.classList.add('visually-hidden');
        });
    }

    const removeListeners = () => {
      modalBookItemClose.removeEventListener('click', clickModalBookItemClose);
      document.removeEventListener('click', clickDocumentModalBookItemBox);
      document.removeEventListener('keydown', keydownDocumentModalBookItemBox);
    };

    modalBookItemShoppinhlistAdd.addEventListener('click', () => {
      shopingList.push(result.data);
      updateUserShoppingList(shopingList)
        .then(shoppingListRes => {
          modalBookItemShoppinhlistAdd.classList.add('visually-hidden');
          modalBookItemShoppinhlistRemove.classList.remove('visually-hidden');
          modalBookItemShoppinhlistRemoveParagraph.classList.remove('visually-hidden');
        })
        .catch(updateUserShoppingListError => {
          Notify.failure(updateUserShoppingListError);
        });
    });

    modalBookItemShoppinhlistRemove.addEventListener('click', () => {
      shopingList.splice(
        shopingList.findIndex(item => item._id === result.data._id),
        1
      );
      updateUserShoppingList(shopingList)
        .then(shoppingListRes => {
          modalBookItemShoppinhlistAdd.classList.remove('visually-hidden');
          modalBookItemShoppinhlistRemove.classList.add('visually-hidden');
          modalBookItemShoppinhlistRemoveParagraph.classList.add('visually-hidden');
        })
        .catch(updateUserShoppingListError => {
          Notify.failure(updateUserShoppingListError);
        });
    });

    const modalBookItemClose = document.querySelector('.modal-book-item-close');
    const clickModalBookItemClose = evt => {
      modalBookItem.classList.add('visually-hidden');
      removeListeners();
    };
    modalBookItemClose.addEventListener('click', clickModalBookItemClose);

    const modalBookItemBox = document.querySelector('.modal-book-item-box');
    const clickDocumentModalBookItemBox = evt => {
      if (!evt.composedPath().includes(modalBookItemBox)) {
        modalBookItem.classList.add('visually-hidden');
        removeListeners();
      }
    };
    document.addEventListener('click', clickDocumentModalBookItemBox);

    const keydownDocumentModalBookItemBox = evt => {
      if (evt.key == 'Escape') {
        modalBookItem.classList.add('visually-hidden');
        removeListeners();
      }
    };
    document.addEventListener('keydown', keydownDocumentModalBookItemBox);
  });
};

export { makeBlocks, makeTopBlocks };
