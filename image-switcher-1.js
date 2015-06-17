(function() {

    var imgAttr = function(num) {
        return 'img-0' + num + '.png';
    };

    var maxImgs = 4;
    var imgNum = 2; // Starts from image 2.
    var intervalId = undefined;

    var imgTag = document.querySelectorAll('#wrapper img')[0];

    imgTag.addEventListener('mouseenter', function(evt) {
        //
        // Don't wait. Set image 2 immediately.
        //
        imgTag.src = imgAttr(imgNum);
        imgNum += 1;

        intervalId = setInterval(function() {

            if (imgNum > maxImgs) {
                imgNum = 1;
            }

            imgTag.src = imgAttr(imgNum);
            imgNum += 1;

        }, 1000);
    }, false);

    imgTag.addEventListener('mouseleave', function(evt) {
        clearInterval(intervalId);
        //
        // Go back to image 1.
        //
        imgTag.src = imgAttr(1);
        imgNum = 2; // Always start from image 2 on mouseenter.
    }, false);

}());
