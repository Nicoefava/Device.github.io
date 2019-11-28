$(function (){
    $(".content > p").hide();
    $("html").on("click", function() {
        $('.content > p').each(function(i) {
            var delay = (i) * 1500;
            setTimeout(function (div) {
                div.fadeIn();
            }, delay, $(this));
         });
        setTimeout(function() {
            $("figure").toggleClass("rotate");
            $(".content").toggleClass("landscape");
        }, 6000);
    });
})