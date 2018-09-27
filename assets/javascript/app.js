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
let questionTimer = 30;
let answerTimer = 5;
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
      console.log(questionTimer)
      if (questionTimer === 0) {
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
    // Fix image path
    $(".a1").html("<img src='" + questions[questionCounter].image + "'/>");
}

// Time Up Function
let timeUp = function (){
    unanswered++;
    clearDom();
    timeUpScreen();
    answerCountdown();
    if (answerCountdown == 0) {
        questionCounter ++;
        startGame();
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
        if (questionCounter > 5){
            questionCounter ++;
            startGame();
        }
    } else {
        incorrect++;
        clearDom();
        incorrectScreen();
        answerCountdown();
        if (questionCounter > 5){
            qusetionCounter++;
            startGame();
        }
    }
};

// Correct Screen
let correctScreen = function (){

    $(".question").text("That's Right!");
    // Fix image path
    $(".a1").html("<img src='" + questions[questionCounter].image + "'/>");
};


// Incorrect Screen
let incorrectScreen = function (){
    $(".question").text(questions[questionCounter].incorrect);
    // Fix image path
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

let test = function(){
    console.log("test")

    if (true) {
        answerCheck();
    }   else if (questionTimer == 0) {
        timeUp();
        }
}

$(".answers").click(test);

let gameLoop = function(){
    clearDom();
    display();
    questionCountdown();
    // test();
    // if ($(".answers").click) {
    //     answerCheck();
    // }   else if (questionTimer == 0) {
    //     timeUp();
    //     }
};

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



// Start Game
// let startGame = function (){
//     // Loop through questions 
//     for (i=0; i<questions.length; i++) {
//         clearDom();
//         display();
//         //questionCountdown();
//         if (questionTimer === 0) {
//             timeUp();
//         } else if ($(".answers").click) {
//             answerCheck();
//         }
        
   
//     }
    
// };