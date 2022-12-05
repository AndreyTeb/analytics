$(function() {
  $('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.header__list-small').toggleClass('header__listsmall--active');
  });
  $('.header__list-linksmall, .header__logo').on('click', function() {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.header__list-small').removeClass('header__listsmall--active');
  });
});
