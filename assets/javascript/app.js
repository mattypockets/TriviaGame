$(document).ready(function(){

// Set Question Objects
const question1 = {
    question : "Hal Emmerich goes by which code name?",
    false1 : "Drebin",
    false2 : "Revolver Ocelot",
    false3 : "Grey Fox",
    answer : "Otacon",
    incorrect : "The correct answer is Otacon",
    image : "../images/otacon.jpg",
};

const question2 = {
    question : "The Metal Gear at the center of the Shadow Moses incident was named:",
    false1 : "Ray",
    answer : "Rex",
    false2 : "Zeke",
    false3 : "Fox",
    incorrect : "The correct anser is Rex",
    image : "../images/rex.jpg",
};

const question3 = {
    question : "What was the name of Big Boss' independent military organization?",
    false1 : "Foxhound",
    false2 : "Shagohod",
    answer : "Outer Heaven",
    false3 : "The Patriots",
    incorrect : "The correct anser is Outer Heaven",
    image : "../images/outerHeaven.png",
};

const question4 = {
    question : "The President of the United States during the early 2000s was also known by this codename:",
    answer: "Solidus Snake",
    false1: "Solid Snake",
    false2: "Liquid Snake",
    false3: "Punished Snake",
    incorrect : "The correct answer is Solidus Snake",
    image : "../images.solidus.jpg",
};

const question5 = {
    question : "The project that created the clones of Big Boss was also known as:",
    false1: "Militaires Sans Frontieres",
    answer: "Les Enfants Terrible",
    false2: "Outer Heaven",
    false3: "Diamond Dogs",
    incorrect : "The correct answer is Les Enfants Terrible",
    image : "../images/family.jpg",
};

// Bundle Question objects into an array
const questions = [question1, question2, question3, question4, question5];

// Set other global variables
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let questionTimer = 30;
let answerTimer = 7;

// Display question/answers on DOM
let display = function(){
     $(".question").text(questions[i].question);
     $(".a1").text(questions[i].answer);
     $(".a2").text(questions[i].false1);
     $(".a3").text(questions[i].false2);
     $(".a4").text(questions[i].false3);
};

// Every 30 seconds, display a new question

// Check if answer is correct or incorrect
let answerCheck = function(){
    if (this === (questions[i].answer)) {
        correct++;
        clearDom();
        correctScreen();
    } else {
        incorrect++;
        clearDom();
        incorrectScreen();
    }
};

// Correct Screen
let correctScreen = function (){
    $(".question").text("That's Right!");
    // Fix image path
    $(".a1").html("<img src=" + questions[i].image + " />");
};

// Incorrect Screen
let incorrectScreen = function (){
    $(".question").text(questions[1].incorrect);
    // Fix image path
    $(".a1").html("<img src=" + questions[i].image + " />");
};

// Loop through questions 
for (i=0; i<questions.length; i++) {
    clearDom();
    display();
    // Set timer for 30 sec
    $(document).click(answerCheck());
    // Stay on answer screen for 7 seconds   
}

// Clear DOM 
let clearDom = function(){
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
        StartGame()
    }));
};

});