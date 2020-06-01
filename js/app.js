$(document).ready(function () {
  /* Burger menu */

  let wrapper = document.querySelector('.burger__button-wrapper');
  let burger = document.querySelector('.burger__button');
  let mobileNav = document.querySelector('.header__mobile-nav');
  let mobileLink = document.querySelectorAll('.mobile-nav__link');
  let body = document.querySelector('body');

  wrapper.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileNav.classList.toggle('header__mobile-nav--active');
    body.classList.toggle('block');
  });

  for (var i = 0; i < mobileLink.length; i++) {
    mobileLink[i].addEventListener('click', function (event) {
      mobileNav.classList.remove('header__mobile-nav--active');
      body.classList.remove('block');
    });
  }

  /* Smooth scroll */
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let elementClass = $(this).data('scroll');
    let elementOffset = $(elementClass).offset().top;

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      800
    );
  });

  /* Slick slider */
  $('.about__slider').slick({
    dots: true,
    speed: 600,
  });
});
