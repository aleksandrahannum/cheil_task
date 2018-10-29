$(document).ready(function () {

    $(function () {

        if ($(window).scrollTop() >= 20) {
            $('.nav_bar').addClass('scroll');
        };

        $(window).scroll(function () {
            if ($(window).scrollTop() >= 20) {
                $('.nav_bar').addClass('scroll');
            } else {
                $('.nav_bar').removeClass('scroll');
            }

        });
    });

    $('#toggleButton').click(function () {
        $('.nav_list_items').stop().slideToggle();
    });




});