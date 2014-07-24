function GameEngine() {
    var direction, 
        score, 
        snakeLength, 
        intervalID,
        width = $("#canvas").width(),
        height = $("#canvas").height(),
        cellWidth = 10,
        snakeCells,
        food,
        previousCellPosition

    function initializeSnake()
    {

        direction = "right"; 
        addKeyDownEvent();
        snakeCells = createSnake();
        food = createFood();
        score = 0;
        intervalID = setInterval(engine, 100);
    }

    function createSnake()
    {
        var snakeLength = 5; 
        var snakeCells = []; 
        for(var i = snakeLength-1; i>=0; i--)
        {
            snakeCells.push({x: i*10, y:0});
        }

        return snakeCells;
    }

    function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createFood()
    {
        var newX = getRandomInt(0, width);
        newX = Math.round(newX/10)*10;
        var newY = getRandomInt(0, height);
        newY = Math.round(newY/10)*10;

        var food = {
            x: newX, 
            y: newY, 
        };

        return food;
    }

    function addKeyDownEvent(){
        $(document).keydown(function(e){
            var key = e.which;
            if(key == "37" && (direction != "right" && direction != "left")){
                direction = "left";
                //snakeCells[0].x -= cellWidth;
            } 
            else if(key == "38" && (direction != "down" && direction != "up")){
                direction = "up";
                //snakeCells[0].y -= cellWidth;
            } 
            else if(key == "39" && (direction != "left" && direction != "right")){
                direction = "right";
                //snakeCells[0].x += cellWidth;
            } 
            else if(key == "40" && (direction != "up" && direction != "down")){
                direction = "down";
                //snakeCells[0].y += cellWidth;
            } 
        })
    }

    function changeCoordinates(snakeCells, isFoodEaten){
        var cell = {};
        if (direction == "left") {
            cell.x = snakeCells[0].x - cellWidth;
            cell.y = snakeCells[0].y;
        }
        else if (direction == "right") {
            cell.x = snakeCells[0].x + cellWidth;
            cell.y = snakeCells[0].y;
        }
        else if (direction == "up") {
            cell.x = snakeCells[0].x;
            cell.y = snakeCells[0].y - cellWidth;
        }
         else if (direction == "down") {
            cell.x = snakeCells[0].x;
            cell.y = snakeCells[0].y + cellWidth;
        }

        if (!isFoodEaten) {
            snakeCells.pop();
        }    
        
        snakeCells.unshift(cell);
    }
 
    function engine() {
        var hasEatenFood = check.hasEatenFood(snakeCells[0].x, snakeCells[0].y, food);
        Renderer.clearScreen();
        Renderer.fillCell(food.x, food.y, cellWidth);
        Renderer.drawSnake(snakeCells);
        Renderer.drawScore(score);
        if (check.isOutOfField(snakeCells[0].x, snakeCells[0].y, width, height) || check.hasBittenHerself(snakeCells)) {
            clearInterval(intervalID);
            initializeSnake();
        }
        changeCoordinates(snakeCells, hasEatenFood);
        if (hasEatenFood) {
            food = createFood();
            score++;
        };

    }
    return {
        initializeSnake : initializeSnake
    }
    
}