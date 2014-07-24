var check = (function() {
    function hasBittenHerself(snakeCells) {
    	var headXCoord = snakeCells[0].x;
    	var headYCoord = snakeCells[0].y;
    	for (var i = 1; i < snakeCells.length; i++) {
    		if (headXCoord === snakeCells[i].x && headYCoord === snakeCells[i].y) {
    			return true;
    		}
    	}
    	return false;
    }
     function isOutOfField(headXCoord, headYCoord, width, height) {
    	if (headXCoord < 0 || headXCoord >= height) {
    		return true;
    	}
    	if (headYCoord < 0 || headYCoord >= width) {
    		return true;
    	}
    	return false;
    }
    function hasEatenFood(headXCoord, headYCoord, food) {
    	if(headXCoord == food.x && headYCoord == food.y)
        {
           return true;
        }
        return false;
    }
    return {
    	hasBittenHerself: hasBittenHerself,
    	isOutOfField: isOutOfField, 
    	hasEatenFood: hasEatenFood
    }
}());