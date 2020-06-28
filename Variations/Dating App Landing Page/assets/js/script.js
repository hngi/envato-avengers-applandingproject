// function animateNavToggler(el) {
//   el.classList.toggle('change');
// }

document.querySelector('[data-nav-toggler]')
  .addEventListener('click', event => {
    const navToggler = document.querySelector('.nav-toggler-icon');
    if (navToggler.classList.contains('change')) {
      navToggler.classList.remove('change');
    } else {
      navToggler.classList.add('change');
    }

  }, false);

document.querySelectorAll('.nav-item')
  .forEach((el, key, parent) => {
    el.addEventListener('click', (event) => {

    }, false);
  });