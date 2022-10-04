// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// These are the Global Variables:
var startBtn = document.getElementById("startBtn");
var time = 75;
var time_remaining = true;
var time_start = false;
var countdownTimer = document.getElementById("countdownTimer");
var mainContainer = document.getElementById("mainContainer");
var quizContainer = document.getElementById("quizContainer");
var questionHeading = document.getElementById("questionHeading");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var correctAnswer = document.getElementById("correctAnswer");
var high_score = [];
var output = "";
var score = 0; // This sets the score to 0 at the start of the quiz.
let i = 0; // This is the question index.

//These are the question arrays:
var questionsArray = [
    {
        question: "Commonly used data types DO Not inclcude:",
        imageScr: "",
        answerChoice: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed with _________.",
        imageScr: "",
        answerChoice: ["1. quotes", "2. curly brackets", "3. paranthesis", "4. square brackets"],
        correctAnswer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        imageScr: "",
        answerChoice: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: 4
    },
    {
        question: "String values must be enclosed within _________ when being assigned to variables.",
        imageScr: "",
        answerChoice: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correctAnswer: 3
    },
    {
        question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        imageScr: "",
        answerChoice: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
        correctAnswer: 4
    },
];

