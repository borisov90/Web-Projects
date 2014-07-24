var movingShapes = function() {

	var container = document.querySelector("#container");

	function add(shape) {

		var div = document.createElement("DIV");
		div.style.top = "50px";
		div.style.left = "250px";
		div.style.width =  "50px";
		div.style.height = "50px";
		div.style.backgroundColor = getRandomColor();
		div.style.borderColor = getRandomColor();
		div.style.position = "absolute";

		if (shape == "rect") {
			var newDiv = div.cloneNode(true);
			var centerX = 600;
            var centerY = 200;
			var direction = 0;
			var functionTimer = setInterval(function moveDivs() {
                if (direction > 3) {
                    direction = 0;
                }

                switch (direction) {
                    case 0: centerX += 5;
                        if (centerX > 700) {
                            direction++;
                        }
                        break;
                    case 1: centerY += 5;
                        if (centerY > 300) {
                            direction++;
                        }
                        break;
                    case 2: centerX -= 5;
                        if (centerX < 600) {
                            direction++;
                        }
                        break;
                    case 3: centerY -= 5;
                        if (centerY < 200) {
                            direction++;
                        }
                        break;
                }

                newDiv.style.left = centerX + 'px';
                newDiv.style.top = centerY + 'px';
				container.appendChild(newDiv);

            }, 10);
		}
		else {
			var centerX = 200;
            var centerY = 200;
            var radius = 50;
            var angle = 0;
			var newDiv = div.cloneNode(true);
			newDiv.style.borderRadius = "60px";
			container.appendChild(newDiv);

		 	var functionTimer = setInterval(function moveDivs() {
                angle++;
                if (angle === 360) {
                    angle = 0;
                }

                var left = centerX + Math.cos((2 * 3.14 / 180) * (angle)) * radius;
                var right = centerY + Math.sin((2 * 3.14 / 180) * (angle)) * radius;

                newDiv.style.left = left + 'px';
                newDiv.style.top = right + 'px';
            }, 10);
		}
	}
	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}
	return {
		add : add
	};
}();