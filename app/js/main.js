$(function () {

    $(".menu__list a, .logo, .header__icon, .footer__icon").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href');

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });


    $('.booking__slider').slick({
        dots: false,
        arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,		
    });


    $('.menu__btn, .menu__link').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

    // var mixer = mixitup('.gallery__content');

});

//burger menu
let burger = document.querySelector('.menu');

burger.addEventListener('click', function () {
    burger.classList.toggle('menu__btn--active');
});

//fixed header
const header = document.querySelector('.header');
const header__nav = document.querySelector('.header__nav');

window.addEventListener('scroll', () => {

    let scrollTop = window.scrollY;

    if (scrollTop >= header__nav.offsetHeight) {

        header__nav.classList.add('header__nav--fixed');
        header.style.paddingTop = `${header__nav.offsetHeight}px`;
    } else {
        header__nav.classList.remove('header__nav--fixed');
        header.style.paddingTop = '0px';
    }
});