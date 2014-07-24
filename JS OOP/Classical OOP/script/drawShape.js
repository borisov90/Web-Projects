var Shapes = function(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = getRandomColor();
	ctx.strokeStyle = getRandomColor();

	function Rect(x, y, width, height) {
		ctx.fillRect(x, y, width, height);

	}
	function Circle(x, y, radius) {
	 	ctx.beginPath();
      	ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      	ctx.fill();
      	ctx.stroke();
      	ctx.closePath();
		
	}
	function Line(x1, y1, x2, y2) {
 		ctx.beginPath();
      	ctx.moveTo(x1, y1);
      	ctx.lineTo(x2, y2);
      	ctx.stroke();
      	ctx.endPath();

		
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
		Rect : Rect,
		Circle : Circle, 
		Line : Line
	}

}();