import {
  createAccount,
  setUserName,
  signInApp,
  isSignIn,
  signOutApp,
  removeAccount,
  removeAccountInfo,
  getUserShoppingList,
  updateUserShoppingList,
  getUserName,
  getUserEmail,
  returnAuth,
} from './api-firebase';

const authRegModalSignUp = document.querySelector('.auth-reg-modal-sign-up');

authRegModalSignUp.addEventListener('click', () => {
  createAccount(email.value, password.value)
    .then(createAccountRes => {
      console.log(`createAccount success`);
      console.log(createAccountRes);
      setUserName('Gosha')
        .then(setUserNameRes => {
          //Тут рахуємо що все добре!
          console.log(`setUserName success `);
          console.log(setUserNameRes);
        })
        .catch(setUserNameError => {
          console.log(`setUserName wrong "${setUserNameError.code}"`);
          removeAccount()
            .then(removeAccountRes => {
              console.log('removeAccount success');
              console.log(removeAccountRes);
            })
            .catch(removeAccountError => {
              console.log('removeAccount wrong');
              console.log(removeAccountError.code);
            });
        });
    })
    .catch(createAccountError => {
      console.log(`createAccount wrong "${createAccountError.code}"`);
      if (createAccountError.code === 'auth/email-already-in-use') {
        console.log('Change auth/email');
      } else if (createAccountError.code === 'auth/invalid-email') {
        console.log('Wrong auth/email');
      } else if (createAccountError.code === 'auth/missing-email') {
        console.log('Enter email');
      } else if (createAccountError.code === 'auth/missing-password') {
        console.log('Enter password');
      } else {
        console.log('Wrong');
      }
    });
});
