////////////////////
//Console Quiz Game!
/*
1. Build a constructor called Question to describe a multiple choice question
2. create a few questions with the constructor
3. store it in an array
4. Random question should be generated in the console. Each question should have a number.  Write a method for the question objects
5. Use "prompt" to get the answer
6. Check if the answer is correct and if it is, prompt yes or no.  Write a method for this
7. make sure all code is private
*/

function QUIZ() {
var QUESTION = function (question, answer, options){
    this.question = question;
    this.answer = answer;
    this.options = options;
    this.choices = GenerateChoices(this.options);
};
function GenerateChoices(options){
    //console.log("Generate Choices " + totalScore);
    var arrayStorage = [];
    for (index = 0; index < options.length; index++){
        arrayStorage.push((index + ": " + options[index]));
    }
    return arrayStorage;
}
//function GenerateQuestions (){
    var question1 = new QUESTION ("Luke Skywaker is played by which actor?", "Mark Hamill" , ["Harrison Ford" , "Will Smith" , "Mark Hamill" , "Adam Driver"]);
    var question2 = new QUESTION ("Python3 was released in what year?", 2008 , [2008 , 2000 , 1996 , 2010, 1990]);
    var question3 = new QUESTION ("What was the first internet content search engine?", "Archie" , ["Google" , "Archie" , "AskJeeves" , "AOL", "Yahoo" , "KnowBot"]);
    var totalScore= 0;
    //store questions in an array....
    var allQuestions = [question1,question2,question3];
    console.log("Before PrintQuestion " + totalScore);
    PrintQuestion(totalScore,allQuestions);
    
    console.log("Outside " + totalScore);
//}
function PrintQuestion(totalScore,allQuestions){
    console.log("PrintQuestion "+ totalScore);
//gives a random number based on the allQuestions array
    var randomQuestion = Math.round(Math.random() * (allQuestions.length - 1));
    //assigns the asked question to the random index in the array
    var questionAsked = allQuestions[randomQuestion];
    console.log(questionAsked.question);
    
    for (var index = 0; index < questionAsked.choices.length; index++){
        console.log(questionAsked.choices[index]);
    } 
    var selectedAnswer = prompt ("Select an answer (type the number): Type exit to quit");
    CheckAnswer(selectedAnswer,totalScore, questionAsked);
}

function CheckAnswer(answer,totalScore,questionAsked){
    var desiredAnswer = questionAsked.answer;

    console.log("Check Answer " + totalScore);
    if (answer === "exit"){
        return;
    }
    else if (desiredAnswer == questionAsked.options[answer]){
        console.log("Answer is correct");
        totalScore++;
        CallScore(totalScore);
        PrintQuestion(totalScore,allQuestions);

    }
    else{
        console.log("Answer is incorrect");
        CallScore(totalScore);
        PrintQuestion(totalScore,allQuestions);

    }
}

function CallScore(totalScore){
    console.log("Call Score " + totalScore);
    console.log("Your current score is: " + totalScore);
    console.log("--------------------");
}

PrintQuestion(totalScore,allQuestions);
console.log("WeOutside");

//will need to create a function that runs a check on the value of the answer and the value of the chosen array.  The prompt will save the index spot of the answers
}
QUIZ();

// while answer != exit keep doing