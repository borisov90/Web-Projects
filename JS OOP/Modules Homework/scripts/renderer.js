var Renderer = (function (snakeCells, direction){
    
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    
    function fillCell(x, y, cellWidth){
        ctx.fillStyle = "green";
        ctx.fillRect(x, y, cellWidth, cellWidth);
        ctx.strokeStyle = "white";
        ctx.strokeRect(x, y, cellWidth, cellWidth);
    }
    function clearScreen() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }
    function drawSnake(snakeCells) {
        for(var i = 0; i < snakeCells.length; i++){
            var cell = snakeCells[i];
            fillCell(cell.x, cell.y ,10);
        }
    }
    function drawScore(score){
        ctx.fillText("Result: " + score, canvas.width - 50, 15);

    }

    return {
       clearScreen: clearScreen,
       fillCell: fillCell,
       drawSnake: drawSnake,
       drawScore: drawScore
   }
}());