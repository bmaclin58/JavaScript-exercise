/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

ADVANCED RULES

1.) A Player loses their ENTIRE score if they roll double 6's

2.) Create a field where the user can add a custom winning score

3.) Add a 2nd dice.  Fails when one of them is a 1
In this version, you have to roll both 6s on the 2 dice
*/

var scores, roundScore, activePlayer;

//custom score is defaulted to 100
var customScore = 100;

//fires on "New Game" button.  Defaults the game
function NewGame(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    //targets css. Removes dice icon, and scores on load
    //document.querySelector(".dice1").style.display = "none";
    //document.querySelector(".dice2").style.display = "none";

    //sets scores to 0 on load
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //removes the "Winner" test
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";

    //displays roll and hold button if they have been removed 
    document.querySelector(".btn-roll").style.display = "block";
    document.querySelector(".btn-hold").style.display = "block";

    //clears winner css that might have been added
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    //makes player 1 the starting player
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

    //displays the custom score buttons and sets the default score
    document.querySelector(".btn-Score").style.display = "block";
    document.querySelector("#CustomScore").style.display = "block";
    document.getElementById("CustomScore").value = 100;

    //erases previous Goal score if there was one.
    document.querySelector("#DisplayScoreGoal").style.display="none";
    
    //removes dice during new game
    document.querySelector(".dice1").style.display = "none";
    document.querySelector(".dice2").style.display = "none";


}

function RollDice(){
    HideCustomScores();
    CustomScore();
    DisplayScoreGoal();
    
    //random number between 1 and 6 needs to be generated 
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //var dice1 = 6;
    //var dice2 = 6;

    //display result
    var diceDOM1 = document.querySelector(".dice1");
    diceDOM1.style.display = "block";
    diceDOM1.src = "dice-" + dice1 + ".png";
    console.log(dice1, dice2);
    var diceDOM2 = document.querySelector(".dice2");
    diceDOM2.style.display = "block";
    diceDOM2.src = "dice-" + dice2 + ".png";

    //erases all of your scores if you roll double 6s
    if (dice1 === 6 && dice2 === 6){
        scores[activePlayer] = 0;
        document.getElementById("score-"+activePlayer).textContent = "BOOM!";

        NextTurn();
    }
    else
    {
        //update ROUND score UNLESS dice = 1
        if (dice1 > 1 && dice2 > 1){
        //add to and display score
        roundScore += dice1 + dice2;
        document.querySelector("#current-"+activePlayer).textContent = roundScore;
        }

        else if (dice1 === 1){
        //end turn
            diceDOM1.src = "pig.jpg";
            NextTurn();
        }
        
        else if(dice2 === 1){
            diceDOM2.src = "pig.jpg";
            NextTurn();
        }
    }
}

function HoldScore(){
    CustomScore();
    DisplayScoreGoal();
    HideCustomScores();

    //console.log("The Score to win is " + customScore);
    //Add current score to global score
    scores[activePlayer] += roundScore;
    //update UI to the screen
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];

    //check if player won the game and switch player
    if(scores[activePlayer] >= customScore){
        document.querySelector("#name-"+activePlayer).textContent = "Winner!";
        document.querySelector(".dice1").style.display = "none";
        document.querySelector(".dice2").style.display = "none";
        document.querySelector(".player-"+activePlayer+ "-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+ "-panel").classList.remove("active");
        document.querySelector(".btn-roll").style.display = "none";
        document.querySelector(".btn-hold").style.display = "none";

    }
    else{
        NextTurn();
    }
}

function NextTurn(){
    roundScore = 0;
    previousRoll = 0;
    document.getElementById("current-"+activePlayer).textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}

function CustomScore(){
    customScore = document.getElementById("CustomScore").value;
    DisplayScoreGoal();
    HideCustomScores();
}
function HideCustomScores(){
    document.querySelector(".btn-Score").style.display = "none";
    document.querySelector("#CustomScore").style.display = "none";
    //display the goal at the bottom
}

function DisplayScoreGoal(){
    document.getElementById("DisplayScoreGoal").textContent = customScore;
    document.querySelector("#DisplayScoreGoal").style.display="block";
}

NewGame();
document.querySelector(".btn-roll").addEventListener("click", RollDice);
document.querySelector(".btn-hold").addEventListener("click", HoldScore);
document.querySelector(".btn-new").addEventListener("click", NewGame);
document.querySelector(".btn-Score").addEventListener("click", CustomScore);


//can target or display data
//document.querySelector("#current-"+activePlayer).textContent = dice;

//changes the html of the document.  *NOTE* if any html tags are used, this must be implemented
//document.querySelector("#current-"+activePlayer).innerHTML = "<em>"" + dice + "</em>";

//document.querySelector(".btn-roll").addEventListener("click", function(){//do something anonymous funciton
//});