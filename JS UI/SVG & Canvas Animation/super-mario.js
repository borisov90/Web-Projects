// that's the source - > http://www.html5canvastutorials.com/kineticjs/html5-canvas-kineticjs-sprite-tutorial/

window.onload = function () {
    "use strict";

    var stage = new Kinetic.Stage({
        container: 'container',
        width: 1024,
        height: 864
    });



   
    var layer = new Kinetic.Layer();

    var imageObj = new Image();


    imageObj.onload = function () {
        var superMario = new Kinetic.Sprite({
            x: 450,
            y: 550,
            image: imageObj,
            animation: 'idle',
            animations: {
                idle: [
                 
                  340, 980, 170, 250,
                 1130, 1040, 180, 200
                ],
                move: [
                  // x, y, width, height (3 frames)
                  560, 985, 240, 260,
                  25, 970, 235, 265,
                  860, 660, 200, 220
                ]
            },
            frameRate: 7,
            frameIndex: 0
        });

        
        layer.add(superMario);

        stage.add(layer);

        superMario.start();

        var frameCount = 0;

        superMario.on('frameIndexChange', function (evt) {
            if (superMario.animation() === 'move' && ++frameCount > 3) {
                superMario.animation('idle'); // restore original animation
                superMario.scaleX(1); // restore original animation
                frameCount = 0;
            }
        });

        function onKeyDown(evt) {
            switch (evt.keyCode) {
                case 37:  // left arrow
                    superMario.setX(superMario.attrs.x -= 50);
                    superMario.attrs.animation = "move";
                    break;
                case 39:  // right arrow
                    superMario.setX(superMario.attrs.x += 50);
                    superMario.scaleX(-1); // this scale reverses the mario
                    superMario.attrs.animation = "move";
                    break;
            }
        }

        window.addEventListener('keydown', onKeyDown);
    };

    imageObj.src = "super-mario-sprite.png";

    var paper = new Raphael(0, 0, 1024, 864);
    paper.image("Idyllic_Mario_by_blendmaster.png", 0, 0, 1024, 864);

   
}