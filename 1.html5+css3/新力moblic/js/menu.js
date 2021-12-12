$(function () {
    $('.header__menu-btn').click(function () {
        $(this).toggleClass('menuOpen');
        $(".menu").slideToggle();
    });
    $('.inactive').click(function () {
        if ($(this).siblings('ul').css('display') == 'none') {
            $(this).siblings('ul').slideDown(100).children('li');
            if ($(this).parents('li').siblings('li').children('ul').css('display') == 'block') {
                $(this).parents('li').siblings('li').children('ul').slideUp(100);
            }
        } else {
            $(this).siblings('ul').slideUp(100);
            $(this).siblings('ul').children('li').children('ul').slideUp(100);
        }
    })
})