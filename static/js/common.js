$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() >= $this.height()) {
        $header.addClass('header-scroll');
    }
    else{
        $header.removeClass('header-scroll');
    }
});
$('.btn-search').on('click', function (e){
    e.preventDefault();
    $('.header-search').addClass('active');
});
$('.search-close').on('click', function (e){
    e.preventDefault();
    $('.header-search').removeClass('active');
});
$('.hero-slider').slick({
    dots: true,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
$('.tab-nav a').on('click', function (e){
    e.preventDefault();
    var $this = $(this);
    var $thisTab = $this.data('tab');
    $this.parent().parent().find('a').removeClass('active');
    $this.parent().parent().next().find('.tab-item').removeClass('active');
    $this.addClass('active');
    $('div[data-tab = '+$thisTab+']').addClass('active');
});
$('.has-sub a').on('click', function (e){
    e.preventDefault();
    var $this = $(this);
    $('.header-catalog').toggleClass('active');
});
$('.btn-popup').on('click', function (e){
    e.preventDefault();
    var $this = $(this);
    var $thisPopup = $this.data('popup');
    if($this.hasClass('active')){}else{
        $('body').addClass('scroll-h');
        $('.popup').removeClass('active');
        $('div[data-popup = '+$thisPopup+']').addClass('active');
    }
});
$('.popup-close').on('click', function (e){
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('body').removeClass('scroll-h')
});
$('.popup-overlay').on('click', function (e){
    var $this = $(this);
    $this.parent().removeClass('active');
    $('body').removeClass('scroll-h')
});
$('.btn-nav').on('click', function (e){
    var $this = $(this);
    $this.toggleClass('active');
    $('body').toggleClass('scroll-h');
    $('.header').toggleClass('is-open');
});
$(document).mouseup(function (e){
    var headerSearch = $(".header-search");
    if (!headerSearch.is(e.target)
        && headerSearch.has(e.target).length === 0) {
        headerSearch.removeClass('active');
    }
    var headerCatalog = $(".header-catalog, .has-sub a");
    if (!headerCatalog.is(e.target)
        && headerCatalog.has(e.target).length === 0) {
        headerCatalog.removeClass('active');
    }
});


$('input[type="tel"]').inputmask('+38 (999) 99-99-999 ');
$("#forgotForm").validate({
    errorElement: "span",
});
$("#loginForm").validate({
    errorElement: "span",
});
$("#registerForm").validate({
    errorElement: "span",
    rules : {
        password : {
            minlength : 5
        },
        password_confirm : {
            minlength : 5,
            equalTo : "#password"
        }
    }
});