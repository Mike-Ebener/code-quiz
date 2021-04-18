
//variable containers
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//start builindg quiz

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


// Questions array

var myQuestions = [
    {
      question: "Commonly used data types DO Not Include:",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an if/else statment is encolsed with __________",
      answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets"
      },
      correctAnswer: "c"
    },
    {
      question: "A very useful tool used during development and debugging for printing context to the debugger is:?",
      answers: {
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console.log"
      },
      correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: {
          a: "commas",
          b: "curly brackets",
          c: "quotes",
          d: "parenthesis"
        },
        correctAnswer: "c"
      },

      {
        question: "Arrays in JavaScript cannot be used to store ",
        answers: {
          a: "numbers and strings",
          b: "other arrays",
          c: "booleans",
          d: "3rd party APIs"
        },
        correctAnswer: "d"
      }


  ];