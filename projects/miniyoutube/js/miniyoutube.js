$(document).ready(function() {
    NProgress.start();
    $(".features").css("display", "none");
});

$(window).load(function() {
    NProgress.done();
    $(".features").fadeIn(1500);
});