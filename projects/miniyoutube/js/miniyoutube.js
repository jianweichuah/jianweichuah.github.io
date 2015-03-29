$(document).ready(function() {
    $("img.img-polaroid").lazyload({
        effect: "fadeIn"
    });

    var numActiveUsersAnimation = new countUp("number-of-users", 0, 2741);
    numActiveUsersAnimation.start();
});