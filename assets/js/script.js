
// functions

function buildQuiz() {

    var output=[];
  }

  function showResults(){}

//variable containers
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//questions array
var myQuestions = [
    {
      question: "Commonly used data types DO Not Include:",
      answers: {
        1: "strings",
        2: "booleans",
        3: "alerts",
        4: "numbers"
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an if/else statment is encolsed with __________",
      answers: {
        1: "quotes",
        2: "curly brackets",
        3: "parenthesis",
        4: "square brackets"
      },
      correctAnswer: "c"
    },
    {
      question: "A very useful tool used during development and debugging for printing context to the debugger is:?",
      answers: {
        1: "JavaScript",
        2: "terminal/bash",
        3: "for loops",
        4: "console.log"
      },
      correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: {
          1: "commas",
          2: "curly brackets",
          3: "quotes",
          4: "parenthesis"
        },
        correctAnswer: "c"
      },

      {
        question: "Arrays in JavaScript cannot be used to store ",
        answers: {
          1: "numbers and strings",
          2: "other arrays",
          3: "booleans",
          4: "3rd party APIs"
        },
        correctAnswer: "d"
      }


  ];


// start the quiz
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


  //Quiz build out

  // to enable each question

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

        //variable holds each possible answer

        var answers = [];

        for(letter in currentQuestion.answers) {

            // add  radio buttons for questions + introduce template literals
        answers.push(
            <label>
                <input type="radio" name="question${questionNumber}" value="${letter}"></input>
            </label>
        );
        }
    }
  );

  // showing the quiz on the page
  quizContainer.innerHTML = output.join('');

//Quiz is built out (End)
