import { initTheme, switchTheme, isThemeDark } from './theme-switcher';

const headerSwitcher = document.querySelector('.header-switcher');
const headerSwitcherImgLight = document.querySelector('.header-switcher-img-light');
const headerSwitcherImgDark = document.querySelector('.header-switcher-img-dark');

const setSwitchButtonImage = () => {
  if (isThemeDark()) {
    headerSwitcherImgLight.classList.add('visually-hidden');
    headerSwitcherImgDark.classList.remove('visually-hidden');
  } else {
    headerSwitcherImgDark.classList.add('visually-hidden');
    headerSwitcherImgLight.classList.remove('visually-hidden');
  }
};

(() => {
  initTheme();
  setSwitchButtonImage();
})();

headerSwitcher.addEventListener('click', () => {
  switchTheme();
  setSwitchButtonImage();
});
