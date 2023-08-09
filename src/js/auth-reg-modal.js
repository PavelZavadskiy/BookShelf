import { createAccount, setUserName, signInApp, removeAccount, getUserName } from './api-firebase';
import { validateEmail } from './utilites';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { updateHeaderUser } from './header';

const authRegModal = document.querySelector('.auth-reg-modal');
const authRegModalClose = document.querySelector('.auth-reg-modal-close');
const authRegModalCallbackForm = document.querySelector('.auth-reg-modal-callback-form');
const authRegModalSwitcherSignUp = document.querySelector('.auth-reg-modal-switcher-sign-up');
const authRegModalSwitcherSignIn = document.querySelector('.auth-reg-modal-switcher-sign-in');
const authRegModalName = document.querySelector('#auth-reg-modal-name');
const authRegModalEmail = document.querySelector('#auth-reg-modal-email');
const authRegModalPassword = document.querySelector('#auth-reg-modal-password');
const authRegModalSignUp = document.querySelector('.auth-reg-modal-sign-up');
const authRegModalSignIn = document.querySelector('.auth-reg-modal-sign-in');

const managementActionAuthRegModal = () => {
  const removeListenersAuthRegModal = () => {
    authRegModalClose.removeEventListener('click', clickAuthRegModalClose);
    document.removeEventListener('click', clickDocumentAuthRegModalCallbackForm);
    document.removeEventListener('keydown', keydownDocumentAuthRegModalCallbackForm);
    authRegModalSwitcherSignUp.removeEventListener('click', clickDAuthRegModalSwitcherSignUp);
    authRegModalSwitcherSignIn.removeEventListener('click', clickDAuthRegModalSwitcherSignIn);
    authRegModalSignIn.removeEventListener('click', clickAuthRegModalSignIn);
    authRegModalSignUp.removeEventListener('click', clickAuthRegModalSignUp);
  };

  const clickAuthRegModalClose = () => {
    authRegModal.classList.add('visually-hidden');
    removeListenersAuthRegModal();
  };
  authRegModalClose.addEventListener('click', clickAuthRegModalClose);

  const clickDocumentAuthRegModalCallbackForm = evt => {
    if (!evt.composedPath().includes(authRegModalCallbackForm) && evt.composedPath().includes(authRegModal)) {
      authRegModal.classList.add('visually-hidden');
      removeListenersAuthRegModal();
    }
  };
  document.addEventListener('click', clickDocumentAuthRegModalCallbackForm);

  const keydownDocumentAuthRegModalCallbackForm = evt => {
    if (evt.key == 'Escape') {
      authRegModal.classList.add('visually-hidden');
      removeListenersAuthRegModal();
    }
  };
  document.addEventListener('keydown', keydownDocumentAuthRegModalCallbackForm);

  const clickDAuthRegModalSwitcherSignUp = () => {
    authRegModalSwitcherSignIn.classList.remove('auth-reg-modal-switcher-active');
    authRegModalSwitcherSignUp.classList.add('auth-reg-modal-switcher-active');
    authRegModalName.classList.remove('visually-hidden');
    authRegModalSignUp.classList.remove('visually-hidden');
    authRegModalSignIn.classList.add('visually-hidden');
  };
  authRegModalSwitcherSignUp.addEventListener('click', clickDAuthRegModalSwitcherSignUp);

  const clickDAuthRegModalSwitcherSignIn = () => {
    authRegModalSwitcherSignUp.classList.remove('auth-reg-modal-switcher-active');
    authRegModalSwitcherSignIn.classList.add('auth-reg-modal-switcher-active');
    authRegModalName.classList.add('visually-hidden');
    authRegModalSignUp.classList.add('visually-hidden');
    authRegModalSignIn.classList.remove('visually-hidden');
  };
  authRegModalSwitcherSignIn.addEventListener('click', clickDAuthRegModalSwitcherSignIn);

  const signIn = async (email, password) => {
    signInApp(email, password)
      .then(() => {
        getUserName()
          .then(getUserNameRes => {
            updateHeaderUser(getUserNameRes.data().name);
            authRegModal.classList.add('visually-hidden');
            removeListenersAuthRegModal();
          })
          .catch(getUserNameError => {
            Notify.failure(`Get user name error: ${getUserNameError.code}`);
          });
      })
      .catch(signInAppError => {
        Notify.failure(`Authorization error: ${signInAppError.code}`);
      });
  };

  const clickAuthRegModalSignIn = () => {
    const email = authRegModalEmail.value.trim();
    const password = authRegModalPassword.value.trim();
    if (validateEmail(email)) {
      if (password.length >= 5) {
        signIn(email, password);
      } else {
        Notify.failure('The password must be at least 5 characters long!');
      }
    } else {
      Notify.failure('Wrong email!');
    }
  };
  authRegModalSignIn.addEventListener('click', clickAuthRegModalSignIn);

  const signUp = async (email, password, name) => {
    createAccount(email, password)
      .then(() => {
        setUserName(name)
          .then(() => {
            updateHeaderUser(name);
            authRegModal.classList.add('visually-hidden');
            removeListenersAuthRegModal();
          })
          .catch(setUserNameError => {
            Notify.failure(`Create account error: ${setUserNameError.code}`);
            removeAccount()
              .then(() => {})
              .catch(removeAccountError => {
                Notify.failure(`Create account error: ${removeAccountError.code}`);
              });
          });
      })
      .catch(createAccountError => {
        Notify.failure(`Create account error: ${createAccountError.code}`);
      });
  };
  const clickAuthRegModalSignUp = () => {
    const email = authRegModalEmail.value.trim();
    const password = authRegModalPassword.value.trim();
    const name = authRegModalName.value.trim();
    if (validateEmail(email)) {
      if (password.length >= 5) {
        if (name.length > 0) {
          signUp(email, password, name);
        }
      } else {
        Notify.failure('The password must be at least 5 characters long!');
      }
    } else {
      Notify.failure('Wrong email!');
    }
  };
  authRegModalSignUp.addEventListener('click', clickAuthRegModalSignUp);
};

const initAuthRegModal = () => {
  authRegModalSwitcherSignUp.classList.remove('auth-reg-modal-switcher-active');
  authRegModalSwitcherSignIn.classList.add('auth-reg-modal-switcher-active');
  authRegModalName.classList.add('visually-hidden');
  authRegModalSignUp.classList.add('visually-hidden');
  authRegModalSignIn.classList.remove('visually-hidden');
};

export { managementActionAuthRegModal, initAuthRegModal };
