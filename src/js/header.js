import { initTheme, switchTheme, isThemeDark } from './theme-switcher';
import { managementActionAuthRegModal, initAuthRegModal } from './auth-reg-modal';
import { isSignIn, getUserName } from './api-firebase';

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

export { updateHeaderUser };
