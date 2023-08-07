const mainBlocks = document.querySelector('.main-blocks');
const mainBlocksTitle = document.querySelector('.main-blocks-title');
const mainBlocksList = document.querySelector('.main-blocks-list');

const mainTopBlocks = document.querySelector('.main-top-blocks');
const mainTopBlocksTitle = document.querySelector('.main-top-blocks-title');
const mainTopBlocksList = document.querySelector('.main-top-blocks-list');

const makeBlocks = (object, title) => {
  mainBlocks.classList.remove('visually-hidden');
  mainTopBlocks.classList.add('visually-hidden');
  mainBlocksTitle.textContent = title;

  const markup = object.data
    .map(item => {
      return `<li class="main-block-list-item">
                <a class="main-block-list-item-link link" id="${item._id}">
                  <div class="main-block-list-item-img-box">
                    <img class="main-block-list-item-img" src="${item.book_image}" alt="${
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
  console.log(object);
  mainTopBlocks.classList.remove('visually-hidden');
  mainBlocks.classList.add('visually-hidden');
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
  console.log(categories);
  let booksMarkUp = '';
  let count = categories.books.length > 5 ? 5 : categories.books.length;
  for (let i = 0; i < count; i++) {
    booksMarkUp += `
      <li class="main-top-blocks-list-books-item">
        <a class="main-top-blocks-list-item-link link" id="${categories.books[i]._id}">
          <div class="main-top-blocks-list-item-img-box">
            <img class="main-top-blocks-list-item-img" src="${categories.books[i].book_image}" alt="${
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

export { makeBlocks, makeTopBlocks };
