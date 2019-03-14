/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;

function RollDice(){
    //random number between 1 and 6 needs to be generated 
    var dice = Math.floor(Math.random() * 6) + 1;

    //display result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //update ROUND score UNLESS dice = 1
    if (dice > 1){
        //add to and display score
        roundScore += dice;
        document.querySelector("#current-"+activePlayer).textContent = roundScore;

    }
    else{
        //end turn
        diceDOM.src = "pig.jpg";
        NextTurn();
    }
}

function NextTurn(){
    roundScore = 0;
    document.getElementById("current-"+activePlayer).textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}

function HoldScore(){
    //Add current score to global score
    scores[activePlayer] += roundScore;
    //update UI to the screen
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];

    //check if player won the game and switch player
    if(scores[activePlayer] >= 100){
        document.querySelector("#name-"+activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-"+activePlayer+ "-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+ "-panel").classList.remove("active");

    }
    else{
        NextTurn();
    }
}

//targets css. Removes dice icon, and scores on load
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", RollDice);
document.querySelector(".btn-hold").addEventListener("click", HoldScore);

//can target or display data
//document.querySelector("#current-"+activePlayer).textContent = dice;

//changes the html of the document.  *NOTE* if any html tags are used, this must be implemented
//document.querySelector("#current-"+activePlayer).innerHTML = "<em>"" + dice + "</em>";

//document.querySelector(".btn-roll").addEventListener("click", function(){//do something anonymous funciton
//});