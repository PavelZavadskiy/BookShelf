import bookshop from '../images/bookshop.png';
import amazon from '../images/amazon.png';
import apple from '../images/apple.png';
import iconTrash from '../images/icons.svg';

const createMainShoppingList = (shoppingList, firstIndex, lastIndex) => {
  console.log('createMainShoppingList');
  let markupString = '';

  for (let i = firstIndex; i <= lastIndex; i++) {
    markupString += `
        <li class="main-shoppinglist-list-item">
          <div class="main-shoppinglist-img-box">
            <img class="main-shoppinglist-img" src=${shoppingList[i].book_image} alt=">${
      shoppingList[i].author + ' ' + shoppingList[i].title
    }" loading="lazy"/>
          </div>
          <div class="main-shoppinglist-text-box">
            <button class="main-shoppinglist-text-remove">
              <svg class="main-shoppinglist-text-remove-icon">
                <use href="${iconTrash}#icon-trash"></use>
              </svg>
            </button>
            <h2 class="main-shoppinglist-text-title">${shoppingList[i].title}</h2>
            <p class="main-shoppinglist-text-category">${shoppingList[i].list_name}</p>
            <div class="main-shoppinglist-text-description-box" >
              <p class="main-shoppinglist-text-description">${shoppingList[i].description}</p>
            </div>
            <div class="main-shoppinglist-text-bottom">
              <h2 class="main-shoppinglist-text-author">${shoppingList[i].author}</h2>
              <div class="main-shoppinglist-text-link-box">
                <a class="main-shoppinglist-text-link-amazon link" target="_blank" href="">
                  <img
                    class="main-shoppinglist-text-link-img"
                    src="${amazon}"
                    alt="Amazon link"
                    loading="lazy"
                  />
                </a>
                <a class="main-shoppinglist-text-link-apple link" target="_blank" href="">
                  <img
                    class="main-shoppinglist-text-link-img"
                    src="${apple}"
                    alt="Apple books link"
                    loading="lazy"
                  />
                </a>
                <a class="main-shoppinglist-text-link-bookshop link" target="_blank" href="">
                  <img
                    class="main-shoppinglist-text-link-img"
                    src="${bookshop}"
                    alt="Book shop link"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
    `;
    const mainShoppinglistList = document.querySelector('.main-shoppinglist-list');
    mainShoppinglistList.innerHTML = markupString;
  }
};

export { createMainShoppingList };
