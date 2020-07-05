document.querySelector('[data-nav-toggler]')
  .addEventListener('click', event => {
    const navToggler = document.querySelector('.custom-nav-toggler-icon');
    navToggler.classList.toggle('open');
  }, false);

$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
  const navToggler = document.querySelector('.custom-nav-toggler-icon');
  navToggler.classList.toggle('open');
});