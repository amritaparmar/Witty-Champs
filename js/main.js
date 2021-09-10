
/*  TABLE OF CONTENTS
 ---------------------------
 1. Loading / Opening
 2. MultiScroll
 3. Carousels
 4. Countdown
 5. Newsletter
 6. Swipebox
 7. Tooltips
 8. Tab to accordian
 9. Menu toggle
 */

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function () {

    // General animations
    setTimeout(function () {

        $(".loading-part").addClass("index-999");

        $(".ms-left").addClass("fadeInLeft");
        $(".ms-right").addClass("fadeInRight");

        $(".social-icons").addClass("fadeIn").removeClass("opacity-0");

    }, 1000);

    // FadeInDown for the digits
    setTimeout(function () {
        $('.digit').each(function (i) {
            (function (self) {
                setTimeout(function () {
                    $(self).addClass('fadeInDown').removeClass("opacity-0");
                }, (i * 150) + 150);
            })(this);
        });
    }, 2000);

    // FadeInRight for the text "Days", FadeInUp for the nav and active link to the active point to display the tooltip
    setTimeout(function () {
        $(".text-right").addClass("fadeInRight").removeClass("opacity-0");

        $('.link-nav').each(function (i) {
            (function (self) {
                setTimeout(function () {
                    $(self).addClass('fadeInUp').removeClass("opacity-0");
                }, (i * 200) + 200);
            })(this);
        });

        $('#multiscroll-nav li a.active').addClass('active-opening');
    }, 2850);

    // FadeInUp for the text
    setTimeout(function () {
        $(".text-news").addClass("fadeInUp").removeClass("opacity-0");
    }, 3000);

    // FadeInUp for the newsletter form
    setTimeout(function () {
        $("#subscribe").addClass("fadeInUp").removeClass("opacity-0");
    }, 3400);

    // Display none for the loading
    setTimeout(function () {
        $(".loading-part").addClass("display-none");
    }, 4200);

    // Remove all the animations to prevent when the screen is resized, for playing them again, if you remove the next lines, the entrance animations will be played each time
    setTimeout(function () {
        $(".digit").removeClass("fadeInDown animated-middle").addClass("");
        $(".text-right").removeClass("fadeInRight animated-middle").addClass("");
        $(".text-news").removeClass("fadeInRight animated-middle").addClass("");
        $("#subscribe").removeClass("fadeInRight animated-middle").addClass("");
        $('#multiscroll-nav li a').removeClass('active-opening');
    }, 4650);

});

$(document).ready(function () {

    // Hover purchase part, effect on the button
    $("#left3").hover(
            function () {
                $('a.action').toggleClass('shake');
            }
    );

    /* ------------------------------------- */
    /* 2. MultiScroll ...................... */
    /* ------------------------------------- */

    var onMobile = false;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        onMobile = true;
    }

    if ((onMobile === false)) {

        $('#multi-div').multiscroll({
            // anchors: ['Home', 'Plans', 'Why Us', 'Contact'],
            loopTop: true,
            loopBottom: true,
            navigation: true,
            navigationTooltips: ['Home', 'Plans', 'Why Us', 'Contact'],
        });

    } else {

        $('#multi-div').multiscroll({
            // anchors: ['Home', 'Plans', 'Why Us', 'Contact'],
            loopTop: true,
            loopBottom: true,
            navigation: true,
            navigationTooltips: ['Home', 'Plans', 'Why Us', 'Contact'],
        });

        $('#multi-div').multiscroll.destroy();
    }

    /* ------------------------------------- */
    /* 3. Carousels ........................ */
    /* ------------------------------------- */

    $('#carousel-pictures').carousel({
        interval: 5000 // False if you want to remove auto slide
    });

    $('#carousel-services').carousel({
        interval: 5000 // False if you want to remove auto slide
    });

    $('#carousel-testimonial').carousel({
        interval: 5000 // False if you want to remove auto slide
    });

    /* ------------------------------------- */
    /* 4. Countdown ........................ */
    /* ------------------------------------- */

    // Set you end date just below
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 31,
            'month': 12,
            'year': 2016,
            'hour': 11,
            'min': 13,
            'sec': 0
        },
        omitWeeks: true
    });

    /* ------------------------------------- */
    /* 5. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    /* ------------------------------------- */
    /* 6. Swipebox ......................... */
    /* ------------------------------------- */

    $('.swipebox').swipebox();

    /* Video */
    $('.swipebox-video').swipebox();

    /* ------------------------------------- */
    /* 7. Tooltips ......................... */
    /* ------------------------------------- */

    if (window.matchMedia("(min-width: 1025px)").matches) {

        $(function () {
            $("[data-toggle='tooltip']").tooltip();
        });

    }

    /* ------------------------------------- */
    /* 8. Tab to accordian ........................ */
    /* ------------------------------------- */


    // tabbed content-1
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs li').last().addClass("tab_last");



    // tabbed content-2
    $(".tab_content1").hide();
    $(".tab_content1:first").show();

    /* if in tab mode */
    $("ul.tabs1 li").click(function () {

        $(".tab_content1").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs1 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading1").removeClass("d_active");
        $(".tab_drawer_heading1[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading1").click(function () {

        $(".tab_content1").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading1").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs1 li").removeClass("active");
        $("ul.tabs1 li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs1 li').last().addClass("tab_last");



    // tabbed content-3
    $(".tab_content2").hide();
    $(".tab_content2:first").show();

    /* if in tab mode */
    $("ul.tabs2 li").click(function () {

        $(".tab_content2").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs2 li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading2").removeClass("d_active");
        $(".tab_drawer_heading2[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading2").click(function () {

        $(".tab_content2").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading2").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs2 li").removeClass("active");
        $("ul.tabs2 li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs2 li').last().addClass("tab_last");



    /* ------------------------------------- */
    /* 9. Menu toggle ........................ */
    /* ------------------------------------- */

    $('.right_menu_icon a').on('click', function () {
        $('.hamburgermenu_toggle').toggle("medium");
    });

    $('.mobile_menu a').on('click', function () {
        $('.hamburgermenu_toggle').toggle("medium");
    });

});

    