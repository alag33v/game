$(document).ready(function () {
  /* Burger menu */

  let wrapper = document.querySelector('.burger__button-wrapper');
  let burger = document.querySelector('.burger__button');
  let mobileNav = document.querySelector('.header__mobile-nav');
  let mobileLink = document.querySelectorAll('.mobile-nav__link');
  let html = document.querySelector('html');
  let body = document.querySelector('body');

  wrapper.addEventListener('click', (evt) => {
    evt.preventDefault();
    burger.classList.toggle('active');
    mobileNav.classList.toggle('header__mobile-nav--active');
    html.classList.toggle('block');
    body.classList.toggle('block');
  });

  for (var i = 0; i < mobileLink.length; i++) {
    mobileLink[i].addEventListener('click', function (event) {
      burger.classList.toggle('active');
      mobileNav.classList.remove('header__mobile-nav--active');
      html.classList.toggle('block');
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

  /* Scrollreveal */
  const sr = ScrollReveal()

  sr.reveal('.main__title', {
    duration: 1000,
    distance: '75px',
    origin: 'top',
  })

  sr.reveal('.main__subtitle', {
    duration: 1000,
    distance: '25px',
    origin: 'top',
    delay: 500,
  })

  sr.reveal('.suptitle', {
    duration: 500,
    distance: '100px',
    origin: 'top',
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 100,
      left: 0,
    }
  })

  sr.reveal('.title__top', {
    duration: 1000,
    distance: '50px',
    origin: 'top',
    delay: 250,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 100,
      left: 0,
    }
  })

  sr.reveal('.requirements__title', {
    duration: 1000,
    distance: '50px',
    origin: 'top',
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 100,
      left: 0,
    }
  })

  sr.reveal('.requirements__text', {
    duration: 1000,
    distance: '10px',
    origin: 'top',
    delay: 500,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 100,
      left: 0,
    }
  })
});
