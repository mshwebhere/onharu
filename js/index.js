$(function () {
    $(window).resize(function () {
        var winWidth = $(window).width();
        var boxWidth = $('.atta_banner_text').width();
        if (winWidth <= 1920) {
            $('.atta_banner_text').height(boxWidth * 0.234375);
        }
    });

    var jbOffset = $('#gnb').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > 969) { //여기 지정된 길이 이후부터 적용
            $('header').addClass("on");
            $('header .beige_filter').addClass("navy_filter");
            $('header .beige_filter').removeClass("beige_filter");
        }
        else {
            $('header').removeClass("on");
            $('header .navy_filter').addClass("beige_filter");
            $('header .navy_filter').removeClass("navy_filter");
        }
    });

    $(function () {
        $("#slide-open").click(function () {
            $(".slide-open img").addClass("on");
            $("#slide").addClass("on");
        });

        $(".btn_close").click(function () {
            $(".slide-open img").removeClass("on");
            $("#slide").removeClass("on");
        });

        $("#slide ul li a").click(function () {
            if ($(".slide-open img").hasClass("on")) {
                $(".slide-open img").removeClass("on");
                $("#slide").removeClass("on");
            } else {
                $(".slide-open img").addClass("on");
                $("#slide").addClass("on");
            }
        });

        $('a[href*="#"]:not([href="#"])').click(function () {
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top,
                        },
                        1000
                    ); //움직이는 시간 조정
                    return false;
                }
            }
        });
    });
});

$(function () {
    $("#qna ul> li").click(function () {
        $(this).children(".text_info").slideToggle();
        $(this).siblings().children(".text_info").slideUp();
    });
});

$(function () {
    $("#qna ul> li").click(function () {
        $(this).toggleClass("turn");

        if ($(this).hasClass("turn") === true) {
            $(this).siblings().removeClass("turn");

        }

    });
});

