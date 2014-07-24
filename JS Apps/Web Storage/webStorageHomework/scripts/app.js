(function () {
    require.config({
        paths: {
            "generator": "./generator",
            "receiver": "./receiver",
            "renderer": "./renderer",
            "storage" : "./web-storage-objects"
        }
    });
   


    require(['generator', 'receiver', 'renderer', 'storage'], function (generator, receiver, renderer, storage) {
        var abcd = generator.generateABCD();
        var trialsCounter = 0;
        var winningConditionReached = false;
        var winningMessage = "Congratulations, you won!";
        var inputBTN = document.getElementById("input-btn");
        var errorMessage = "You have been mistaken, sir! The number should have 4 digits : )";
        inputBTN.addEventListener("click", compareNumbers);
        var backgroundMusic = new Audio('./sounds/slavchoPaluvaSKozi.mp3');
        backgroundMusic.volume = 1;
        backgroundMusic.play();
        console.log("The audio is about 2 minutes long!");

        function getNumberFromUser() {

            var xyzw = receiver.receiveXYZW();
            if (xyzw < 10000 && xyzw > 999) {
                console.log("The user's input is " + xyzw);
                return xyzw;
            } else {
                renderer.add(errorMessage);
                throw Error(errorMessage);
            }
        }
        function compareNumbers() {
               
            trialsCounter++;
            var userGuess = getNumberFromUser();
            var userGuessAssArray = JSON.stringify(userGuess);
            var rams = checkForRams(userGuessAssArray);
            var sheeps = checkForSheeps(userGuessAssArray);
            if (winningConditionReached) {

                alert(winningMessage);
                renderer.add("Congratulations, you have won with the " + trialsCounter + "th try!");
                var nickname = prompt("Enter your nickname for the hall of fame!", "Penio is that you?!");
                storage.addScore(nickname, trialsCounter);
                console.log(nickname);
                winningConditionReached = false;

            }
            else {
                renderer.add("Number entered: " + userGuess);
                renderer.add("Sheeps: " + Number(sheeps - rams) + ". "+ "Rams: " + rams + ". "+ "Trials counter: " + trialsCounter);
                //renderer.add()
                //renderer.add();
            }

        }
        function checkForRams(userGuess) {
            var rams = 0;
            var numberToGuess = JSON.parse(abcd);

            for (var i = 0; i < numberToGuess.length; i++) {
                if (numberToGuess[i] == userGuess[i]) {
                    rams++;
                    if (rams == 4) {
                        winningConditionReached = true;
                        console.log("Congratulations, you have won!");
                        return rams;
                    }
                }
            }
            return rams;
        }
        function checkForSheeps(userGuess) {
            var sheeps = 0;
            var numberToGuess = JSON.parse(abcd);
            for (var i = 0; i < numberToGuess.length; i++) {
                for (var j = 0; j < userGuess.length; j++) {
                    if (numberToGuess[i] == userGuess[j]) {
                        sheeps++;
                        break;
                    }
                }
            }

            return sheeps;
        }
        console.log(abcd);
    })

}());

