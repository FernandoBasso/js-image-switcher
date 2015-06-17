(function() {

    var l = function() {
        console.log.apply(console, arguments);
    };

    var imgAttr = function(num) {
        return 'img-0' + num + '.png';
    };

    var intervalId = undefined;
    var numImgAtual = undefined;

    var imgs = document.querySelectorAll('.switcher');

    Array.prototype.forEach.call(imgs, function(item, idx) {
        var numImgAtual = 1;
        var qtde = item.getAttribute('data-qtde');

        item.src = imgAttr(numImgAtual);
        numImgAtual += 1;

        item.addEventListener('mouseenter', function(evt) {
            // Não chega a esperar, e já troca para a imagem 2.
            item.src = imgAttr(numImgAtual);
            numImgAtual += 1;

            intervalId = setInterval(function() {

                if (numImgAtual > qtde) {
                    numImgAtual = 1;
                }

                item.src = imgAttr(numImgAtual);
                numImgAtual += 1;

            }, 1000);
        }, false);

        item.addEventListener('mouseleave', function(evt) {
            clearInterval(intervalId);
            // Volta para a imagem inicial.
            item.src = imgAttr(1);
            // Se iniciar denovo, vai para a 2, como se fosse a primeira vez.
            numImgAtual = 2;
        }, false);
    });
}());
