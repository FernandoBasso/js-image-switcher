(function() {

    var l = function() {
        console.log.apply(console, arguments)
    };

    var maxImgs = 4;
    var imgNum = 1;
    var intervalId = undefined;

    var cur = 1;
    var nex = 2;

    var $img = $('#wrapper img');

    $('#wrapper').on('mouseenter', function(evt) {
        intervalId = setInterval(function() {

            if (cur > maxImgs) {
                cur = 1;
                nex = 2;
            }
            $img.filter("[src*='" + cur + "']").fadeOut();
            $img.filter("[src*='" + nex + "']").fadeIn();

            cur += 1;

            nex = (cur === 4) ? 1 : nex + 1;

        }, 1000);
    });

    $('#wrapper').on('mouseleave', function(evt) {

        $img.filter("[src*='1']").fadeIn();
        $img.filter('.other').fadeOut();

        clearInterval(intervalId);
    });

}());
