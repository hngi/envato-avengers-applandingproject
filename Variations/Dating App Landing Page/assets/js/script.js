// function animateNavToggler(el) {
//   el.classList.toggle('change');
// }

document.querySelector('[data-nav-toggler]')
  .addEventListener('click', event => {
    const navToggler = document.querySelector('.custom-nav-toggler-icon');
    navToggler.classList.toggle('open');
  }, false);

document.querySelectorAll('.nav-item')
  .forEach((el, key, parent) => {
    el.addEventListener('click', (event) => {

    }, false);
  });