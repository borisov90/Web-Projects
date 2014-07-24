var domModule = function() {
	
	function getElement(selector) {
		return document.querySelector(selector);
	}
	function getElements(selector) {
		return document.querySelectorAll(selector);
	}
	function appendChild(child, selector) {
		
		var element = getElement(selector)
		element.appendChild(child);
	}
	function removeChild(parent, selector) {
		var parents = getElements(parent);
		var children = getElement(selector);
		for (var i = 0; i < parents.length; i++) {
			parents[i].removeChild(children);
		};
	}
	function addHandler(selector, eventType, functionToExecute) {
		var button = getElements(selector);
		for (var i = 0; i < button.length; i++) {
			button[i].addEventListener(eventType, functionToExecute);
		};
	}

	var maxBufferCount = 100;
    var bufferElements = [];

	function appendToBuffer(selector, child) {
		if (!bufferElements[selector]) {
	                bufferElements[selector] = document.createDocumentFragment();
        }
        bufferElements[selector].appendChild(child);
        if (bufferElements[selector].childNodes.length == maxBufferCount) {
            var parent = getElement(selector);
            parent.appendChild(bufferElements[selector]);
            bufferElements[selector] = null;
        }
	}
	function getElByCSSSelector(cssSelector) {
		return getElement(cssSelector);
	}
	

	return {
		appendChild : appendChild,
		removeChild : removeChild,
		addHandler : addHandler,
		appendToBuffer : appendToBuffer,
		getElByCSSSelector : getElByCSSSelector
	};
	
}();
