$(document).ready(function(){

// Set Question Objects
const question1 = {
    question : "Hal Emmerich goes by which code name?",
    false1 : "Drebin",
    false2 : "Revolver Ocelot",
    false3 : "Grey Fox",
    answer : "Otacon",
    incorrect : "The correct answer is Otacon",
    image : "assets/images/otacon.jpg",
};

const question2 = {
    question : "The Metal Gear at the center of the Shadow Moses incident was named:",
    false1 : "Ray",
    answer : "Rex",
    false2 : "Zeke",
    false3 : "Fox",
    incorrect : "The correct anser is Rex",
    image : "assets/images/rex.jpg",
};

const question3 = {
    question : "What was the name of Big Boss' independent military organization?",
    false1 : "Foxhound",
    false2 : "Shagohod",
    answer : "Outer Heaven",
    false3 : "The Patriots",
    incorrect : "The correct anser is Outer Heaven",
    image : "assets/images/outerHeaven.png",
};

const question4 = {
    question : "The President of the United States during the early 2000s was also known by this codename:",
    answer: "Solidus Snake",
    false1: "Solid Snake",
    false2: "Liquid Snake",
    false3: "Punished Snake",
    incorrect : "The correct answer is Solidus Snake",
    image : "assets/images.solidus.jpg",
};

const question5 = {
    question : "The project that created the clones of Big Boss was also known as:",
    false1: "Militaires Sans Frontieres",
    answer: "Les Enfants Terrible",
    false2: "Outer Heaven",
    false3: "Diamond Dogs",
    incorrect : "The correct answer is Les Enfants Terrible",
    image : "assets/images/family.jpg",
};

// Bundle Question objects into an array
const questions = [question1, question2, question3, question4, question5];

// Set other global variables
let correct = 0;
let incorrect = 0;
let unanswered = 0;
var questionTimer = 30;
var answerTimer = 5;
let interval;
let questionCounter = 0;
let clicked = false;

// Stop Timer
let stop = function(){
    clearInterval(interval);
};

// Question Countdown function
let questionCountdown = function(){
    interval = setInterval(decrement, 1000);
};

let decrement = function(){
    questionTimer--;

      $(".timer").text("Time Remaining: " + questionTimer);
      if (questionTimer === 0) {
        // Confirmed that the if statement is running but stop function will not run for some reason.
        console.log(questionTimer);
        stop();        
      }
};

// Answer Countdown function
let answerCountdown = function(){
    interval = setInterval(answerDecrement, 1000);
};

let answerDecrement = function(){
    answerTimer--;

      $(".timer").text("Time Remaining: " + answerTimer);
      if (answerTimer === 0) {
        stop();
      }
};


// Display question/answers on DOM
let display = function(){
     $(".question").text(questions[questionCounter].question);
     $(".a1").text(questions[questionCounter].answer);
     $(".a2").text(questions[questionCounter].false1);
     $(".a3").text(questions[questionCounter].false2);
     $(".a4").text(questions[questionCounter].false3);
};

// Time Up Screen
let timeUpScreen = function(){
    $(".question").text("Too Slow! " + questions[questionCounter].incorrect);
    $(".a1").html("<img src='" + questions[questionCounter].image + "'/>");
}

// Time Up Function
let timeUp = function (){
    unanswered++;
    clearDom();
    timeUpScreen();
    answerCountdown();
    if (questionCounter < 4 && answerTimer === 0) {
        questionCounter ++;
        clicked = false;
        startGame();
    } else if (questionCounter === 4) {
        gameOver()
    }
}

// Check if answer is correct or incorrect
let answerCheck = function(){
    clicked = true;
    if (this === (questions[questionCounter].answer)) {
        correct++;
        clearDom();
        correctScreen();
        answerCountdown();
        if (questionCounter < 4 && answerTimer === 0){
            questionCounter ++;
            clicked = false;
            startGame();
        } else if (questionCounter === 4) {
            gameOver()}
    } else {
        incorrect++;
        clearDom();
        incorrectScreen();
        answerCountdown();
        if (questionCounter < 4 && answerTimer === 0){
            qusetionCounter++;
            clicked = false;
            startGame();
        } else if (questionCounter === 4) {
            gameOver()}
    }
};

// Correct Screen
let correctScreen = function (){

    $(".question").text("That's Right!");
    $(".a1").html("<img src='" + questions[questionCounter].image + "'/>");
};


// Incorrect Screen
let incorrectScreen = function (){
    $(".question").text(questions[questionCounter].incorrect);
    $(".a1").html("<img src='" + questions[questionCounter].image + "'/>");
};

// Clear DOM 
let clearDom = function(){
    $(".timer").text("");
    $(".question").text("");
    $(".a1").text("");
    $(".a2").text("");
    $(".a3").text("");
    $(".a4").text("");
}

// After all questions are over, display total correct, incorrect, and unanswered questions.
let gameOver = function (){
    $(".question").text("Results:");
    $(".a1").text("Correct: "+correct);
    $(".a2").text("Incorrect: "+incorrect);
    $(".a3").text("Unanswered: "+unanswered);
    $(".a4").text("Play Again?")

    if ($(".a4").click(function(){
        startGame()
    }));
};

// Run click event
let clicker = function(){

    if (true) {
        answerCheck();
    }   else if (questionTimer == 0) {
        timeUp();
        }
}


// Run through main loop of the game
let gameLoop = function(){
    clearDom();  //Clear Screen
    display(); // Display question/answers
    questionCountdown(); //Start 30 second timer
    // $(".answers").click(clicker);
    if (questionTimer === 0){ // If timer reaches 0, run timeUp function
        timeUp();
    } else ($(".answers").click(clicker)) //Otherwise, if an answer is clicked, check to see if it's the correct one
};


// Go through every question set one by one
let startGame = function() {
    if  (questionCounter === 0) {
        gameLoop();
    } else if (questionCounter === 1) {
        gameLoop();
    } else if (questionCounter === 2) {
        gameLoop();
    } else if (questionCounter === 3) {
        gameLoop();
    } else if (questionCounter === 4) {
        gameLoop();
    } else { gameOver(); }
};
    


$(".question").click(startGame);

});


// I'm at a complete loss about how to fix my game.
// Staying after class helped a little but I guess I don't fully understand controlling timers and click events
// I also didn't fully understand how we fixed the click event initially so I'm not sure how to continue from here.

// Ultimately, it seems like the timers werent updating the time variables correctly so the rest of the function wouldn't continue.
// I tried various solutions but nothing seemed to work as intended.