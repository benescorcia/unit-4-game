// select crystals on html page

let redCrystal = document.querySelector("#ball1");
let blueCrystal = document.querySelector("#ball2");
let yellowCrystal = document.querySelector("#ball3");
let greenCrystal = document.querySelector("#ball4");

// random numbers

let randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);  // returns a random integer from 19 to 120
let randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);  // returns a random integer for red
let randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);  // returns a random integer for blue
let randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);  // returns a random integer for yellow
let randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);  // returns a random integer for green

// select the displays on html page

let randomDisplay = document.querySelector("#randomNumber");
let totalScoreDisplay = document.querySelector("#actualnumber");
let winsDisplay = document.querySelector("#yourteam");
let lossesDisplay = document.querySelector("#awayteam");

// beginning of game
let wins = 0;
let losses = 0;
let totalScore = 0


randomDisplay.textContent = randomNumberOne;

// add eventlisteners on balls
redCrystal.addEventListener("click", function() {
   totalScore = totalScore + randomNumberRed;
   totalScoreDisplay.textContent = totalScore;
       if(totalScore === randomNumberOne) {
        document.querySelector("#yourteam").textContent = "GOAL";
        wins++;
        winsDisplay.textContent = wins;

        //reset
            randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
            randomDisplay.textContent = randomNumberOne;
            randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);
            randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
            randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);
            randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
            totalScore = 0;
            totalScoreDisplay.textContent = totalScore;

       } else if (totalScore > randomNumberOne) {
            document.querySelector("#awayteam").textContent = "noooo!";
            losses++;
            lossesDisplay.textContent = losses;
            
            //reset
            randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
            randomDisplay.textContent = randomNumberOne;
            randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);
            randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
            randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);
            randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
            totalScore = 0;
            totalScoreDisplay.textContent = totalScore;
        }
});

blueCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberRed;
    totalScoreDisplay.textContent = totalScore;
        if(totalScore === randomNumberOne) {
         document.querySelector("#yourteam").textContent = "GOAL";
         wins++;
         winsDisplay.textContent = wins;
 
         //reset
             randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
             randomDisplay.textContent = randomNumberOne;
             randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
             totalScore = 0;
             totalScoreDisplay.textContent = totalScore;
 
        } else if (totalScore > randomNumberOne) {
             document.querySelector("#awayteam").textContent = "noooo!";
             losses++;
             lossesDisplay.textContent = losses;
             
             //reset
             randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
             randomDisplay.textContent = randomNumberOne;
             randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
             totalScore = 0;
             totalScoreDisplay.textContent = totalScore;
         }
 });

 yellowCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberRed;
    totalScoreDisplay.textContent = totalScore;
        if(totalScore === randomNumberOne) {
         document.querySelector("#yourteam").textContent = "GOAL";
         wins++;
         winsDisplay.textContent = wins;
 
         //reset
             randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
             randomDisplay.textContent = randomNumberOne;
             randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
             totalScore = 0;
             totalScoreDisplay.textContent = totalScore;
 
        } else if (totalScore > randomNumberOne) {
             document.querySelector("#awayteam").textContent = "noooo!";
             losses++;
             lossesDisplay.textContent = losses;
             
             //reset
             randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
             randomDisplay.textContent = randomNumberOne;
             randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
             totalScore = 0;
             totalScoreDisplay.textContent = totalScore;
         }
 });

 greenCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberRed;
    totalScoreDisplay.textContent = totalScore;
        if(totalScore === randomNumberOne) {
         document.querySelector("#yourteam").textContent = "GOAL";
         wins++;
         winsDisplay.textContent = wins;
 
         //reset
             randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
             randomDisplay.textContent = randomNumberOne;
             randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
             totalScore = 0;
             totalScoreDisplay.textContent = totalScore;
 
        } else if (totalScore > randomNumberOne) {
             document.querySelector("#awayteam").textContent = "noooo!";
             losses++;
             lossesDisplay.textContent = losses;
             
             //reset
             randomNumberOne = Math.floor(Math.random() * ((120-19)+1) + 19);
             randomDisplay.textContent = randomNumberOne;
             randomNumberRed = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberBlue = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberYellow = Math.floor(Math.random() * ((12-1)+1) + 1);
             randomNumberGreen = Math.floor(Math.random() * ((12-1)+1) + 1);
             totalScore = 0;
             totalScoreDisplay.textContent = totalScore;
         }
 });

blueCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberBlue;
    totalScoreDisplay.textContent = totalScore;
        if(totalScore === randomNumberOne) {
            winner();
        } else if (totalScore > randomNumberOne) {
            loser();
        }
 });
 yellowCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberYellow;
    totalScoreDisplay.textContent = totalScore;
        if(totalScore === randomNumberOne) {
            winner();
        } else if (totalScore > randomNumberOne) {
            loser();
        }
 });
 greenCrystal.addEventListener("click", function() {
    totalScore = totalScore + randomNumberGreen;
    totalScoreDisplay.textContent = totalScore;
        if(totalScore === randomNumberOne) {
            winner();
        } else if (totalScore > randomNumberOne) {
            loser();
        }
 });