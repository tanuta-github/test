$(document).ready(function () {
    $("select").selectBox({mobile:1});

    $(".top a").click(function () {
        var link = $(this).attr("href");
        $(".top a").removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({scrollTop: $(link).offset().top - 100});
        return false;
    });

    $(".top .icon").click(function () {
        $(".top .menu").fadeToggle(300);
    });

    $("#range").ionRangeSlider({from: 70});
});
$(window).scroll(function () {
    $(".top a").each(function () {
        var link = $(this).attr("href");
        if ($(window).scrollTop() > $(link).offset().top - 100) {
            $(".top a").removeClass("active");
            $(this).addClass("active");
        }
    });
});
