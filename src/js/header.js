import { initTheme, switchTheme, isThemeDark } from './theme-switcher';
import { managementActionAuthRegModal, initAuthRegModal } from './auth-reg-modal';
import { isSignIn, getUserName } from './api-firebase';
import { initMainBlock } from './main';

const headerSwitcher = document.querySelector('.header-switcher');
const headerSwitcherImgLight = document.querySelector('.header-switcher-img-light');
const headerSwitcherImgDark = document.querySelector('.header-switcher-img-dark');
const headerUser = document.querySelector('.header-user');
const authRegModal = document.querySelector('.auth-reg-modal');
const headerUserName = document.querySelector('.header-user-name');
const headerUserLogo = document.querySelector('.header-user-logo');
const headerUserIconDown = document.querySelector('.header-user-icon-down');

const setSwitchButtonImage = () => {
  if (isThemeDark()) {
    headerSwitcherImgLight.classList.add('visually-hidden');
    headerSwitcherImgDark.classList.remove('visually-hidden');
  } else {
    headerSwitcherImgDark.classList.add('visually-hidden');
    headerSwitcherImgLight.classList.remove('visually-hidden');
  }
};

const getNameForUpdateHeaderUser = async () => {
  const signIn = await isSignIn();
  if (signIn) {
    getUserName().then(getUserNameRes => {
      updateHeaderUser(getUserNameRes.data().name);
    });
  }
};

(() => {
  initTheme();
  setSwitchButtonImage();
  headerUserName.textContent = 'Sign In';
  headerUserLogo.classList.add('visually-hidden');
  headerUserIconDown.classList.add('visually-hidden');
  getNameForUpdateHeaderUser();
})();

headerSwitcher.addEventListener('click', () => {
  switchTheme();
  setSwitchButtonImage();
});

headerUser.addEventListener('click', () => {
  authRegModal.classList.remove('visually-hidden');
  initAuthRegModal();
  managementActionAuthRegModal();
});

const updateHeaderUser = userName => {
  headerUserName.textContent = userName;
  headerUserLogo.classList.remove('visually-hidden');
  headerUserIconDown.classList.remove('visually-hidden');
};

import { createMainShoppingList } from './main-shoppinglist';
import { getUserShoppingList } from './api-firebase';
import { doc } from 'firebase/firestore';

const headerMenuShopinglist = document.querySelector('.header-menu-shoppinglist');
headerMenuShopinglist.addEventListener('click', () => {
  const mainBlocks = document.querySelector('.main-blocks');
  const mainTopBlocks = document.querySelector('.main-top-blocks');
  const mainShoppinglistBloks = document.querySelector('.main-shoppinglist-bloks');

  mainBlocks.classList.add('visually-hidden');
  mainTopBlocks.classList.add('visually-hidden');
  mainShoppinglistBloks.classList.remove('visually-hidden');

  let shopingList = null;

  if (isSignIn()) {
    console.log('isSignIn()');
    getUserShoppingList()
      .then(respShoppingList => {
        shopingList = respShoppingList.data().shoppingList.slice();

        createMainShoppingList(shopingList, 0, shopingList.length - 1);
        // if (shopingList.find(item => item._id === result.data._id) == undefined) {
        //   modalBookItemShoppinhlistAdd.classList.remove('visually-hidden');
        //   modalBookItemShoppinhlistRemove.classList.add('visually-hidden');
        //   modalBookItemShoppinhlistRemoveParagraph.classList.add('visually-hidden');
        // } else {
        //   modalBookItemShoppinhlistAdd.classList.add('visually-hidden');
        //   modalBookItemShoppinhlistRemove.classList.remove('visually-hidden');
        //   modalBookItemShoppinhlistRemoveParagraph.classList.remove('visually-hidden');
        // }
      })
      .catch(errShoppingList => {
        console.log(`1`);
        Notify.failure(errShoppingList);
        modalBookItemShoppinhlistBtnBox.classList.add('visually-hidden');
      });
  }

  // createMainShoppingList();
});

const headerMenuHome = document.querySelector('.header-menu-home');
headerMenuHome.addEventListener('click', () => {
  initMainBlock();
});

export { updateHeaderUser };
