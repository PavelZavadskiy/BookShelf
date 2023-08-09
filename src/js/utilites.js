function scrollUp() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(scrollUp, 10);
  }
}

function validateEmail(email) {
  let re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}

export { scrollUp, validateEmail };
