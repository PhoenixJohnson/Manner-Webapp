$(document).ready(function() {

    //play on hover with initial play
    var $tiles = $("#tile1, #tile2, #tile3").liveTile({
        playOnHover: true,
        repeatCount: 0,
        delay: 0,
        initDelay: 0,
        startNow: false,
        animationComplete: function(tileData) {
            $(this).liveTile("play");
            tileData.animationComplete = function() {};
        }
    }).each(function(idx, ele) {
        var delay = idx * 1000;
        $(ele).liveTile("play", delay);
    });
});