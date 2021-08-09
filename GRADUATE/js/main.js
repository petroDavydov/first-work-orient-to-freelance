// PRELOADER
// файлы подключены в html
// PRELOADER END


// SLIDER
if ($('#slider').length) {

    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        dots: true
    });

    $('.slider').slick('slickGoTo', 1);

}

//   SLIDER END


// PARALAX
// сделал без использования JQ, недоволен собой, поэтому продолжаю пробывать через JS
// не все понял по видео пришлось догугливать
// PARALAX END


// menu-gamburger

$('.menu-gamburger').click(function () {
    $('.mgos').toggleClass('d-none order')
});

// menu-gamburger end

// кнопка плавной прокрутки

$(".go").click(function (e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body, html").animate({ scrollTop: destination }, 1000)
});


// кнопка плавной прокрутки end

// popUp window / arctic modal

// верхняя кнопка заказать звонок

$('.btn-nov').click(function () {
    $('#exampleModal').arcticmodal();
});
// // нижняя кнопка заказать звонок

$('.button-sec').click(function (e) {
    e.preventDefault()
    $('#exampleModal').arcticmodal();
});


// popUp window / arctic modal end

















// карта на странице контакты
// сделал 1 вариантом через конструктор
