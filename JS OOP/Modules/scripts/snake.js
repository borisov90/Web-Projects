$(document).ready(function(){
    //Canvas stuff
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var width = $("#canvas").width();
    var height = $("#canvas").height();
    
    var cellWidth = 10;
    var direction;
    var food;
    var score;
    
    var snakeCells; 
    
    function initializeSnake()
    {
        direction = "right"; 
        createSnake();
        createFood(); 
        score = 0;
        if(typeof gameLoop != "undefined") clearInterval(game_loop);
        gameLoop = setInterval(VizualizeSnake, 200);
    }
    initializeSnake();
    
    function createSnake()
    {
        var snakeLength = 5; 
        snakeCells = []; 
        for(var i = snakeLength-1; i>=0; i--)
        {
            snakeCells.push({x: i, y:0});
        }
    }
    
    
    function createFood()
    {
        food = {
            x: Math.round(Math.random()*(width-cellWidth)/cellWidth), 
            y: Math.round(Math.random()*(height-cellWidth)/cellWidth), 
        };
    }
    
    
    function VizualizeSnake()
    {
       
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, width, height);
        
        var headXCoord = snakeCells[0].x;
        var headYCoord = snakeCells[0].y;
       
        if(direction == "right") headXCoord++;
        else if(direction == "left") headXCoord--;
        else if(direction == "up") headYCoord--;
        else if(direction == "down") headYCoord++;
        
        
        if(headXCoord == -1 || headXCoord == width/cellWidth || headYCoord == -1 ||
         headYCoord == height/cellWidth || checkForCollision(headXCoord, headYCoord, snakeCells))
        {
            
            initializeSnake();
            return;
        }
        if(headXCoord == food.x && headYCoord == food.y)
        {
            var tail = {x: headXCoord, y: headYCoord};
            score++;
            createFood();
        }
        else
        {
            var tail = snakeCells.pop(); 
            tail.x = headXCoord; tail.y = headYCoord;
        }
        snakeCells.unshift(tail); 
        for(var i = 0; i < snakeCells.length; i++)
        {
            var c = snakeCells[i];
            fillCell(c.x, c.y);
        }
        fillCell(food.x, food.y);
        var textScore = "Result: " + score;
        ctx.fillText(textScore, width - 55, 15);
    }
    
    function fillCell(x, y)
    {
        ctx.fillStyle = "green";
        ctx.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
        ctx.strokeStyle = "white";
        ctx.strokeRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
    }
    
    function checkForCollision(x, y, array)
    {
        for(var i = 0; i < array.length; i++)
        {
            if(array[i].x == x && array[i].y == y)
             return true;
        }
        return false;
    }
    
    $(document).keydown(function(e){
        var key = e.which;
        if(key == "37" && direction != "right") direction = "left";
        else if(key == "38" && direction != "down") direction = "up";
        else if(key == "39" && direction != "left") direction = "right";
        else if(key == "40" && direction != "up") direction = "down";
    })
})