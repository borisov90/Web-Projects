var specialConsole = function() {
	var console = document.createElement("DIV");
	console.className = "console";
	document.body.appendChild(console);

	function writeLine(message, placeHolder) {
		if (placeHolder) {
			message = changePlace(message, placeHolder);
			console.innerHTML += message + "<br>";
		}
		else {
			console.innerHTML += message + "<br>";
		}
		
	}
	function writeError(error, placeHolder) {
		if (placeHolder) {
			error = changePlace(error, placeHolder);
			console.innerHTML += error + "<br>";
		}
		else {
			console.innerHTML += error + "<br>";
		}
		
	}
	function changePlace(message, placeHolder) {
		message = message.replace("{0}", placeHolder);
		return message;

	}
	return {
		writeLine : writeLine,
		writeError : writeError
	}
}();