



// !start quiz functions! 
(function(){
    function buildQuiz(){
      // variable to store the answers output
      var output = [];
  
      // determine behavior for each question
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // this variable will store answers
          var answers = [];
  
          
          for(letter in currentQuestion.answers){
  
            // add an HTML radio button for each answer
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );

          }

          // turn question array into individual slides
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
        
      )
      //  combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // save and store answers in local storage
      var answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of what was answered
      let numInCorrect = 0;
  
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // determine if the answer matches the expected value 
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
          numInCorrect++;
        }
      });
  
      // multiple incorrect answers by 10 and subtract from final countdown timer
      resultsContainer.innerHTML = `${numInCorrect*10} out of ${time-down.length}`;
    }
   
//****prepare to remove previous slide */
      function showNextSlide() {
        showSlide(currentSlide + 1);
      }
      
      function showPreviousSlide() {
        showSlide(currentSlide - 1);
      }
  
// !Start quiz variables !
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    var myQuestions = [
        {
          question: "Commonly used data types DO Not Include:",
          answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
          },
          correctAnswer: "3"
        },
        {
          question: "The condition in an if/else statment is encolsed with __________",
          answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
          },
          correctAnswer: "3"
        },
        {
          question: "A very useful tool used during development and debugging for printing context to the debugger is:?",
          answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
          },
          correctAnswer: "4"
        },
        {
            question: "String values must be enclosed within ________ when being assigned to variables.",
            answers: {
              1: "commas",
              2: "curly brackets",
              3: "quotes",
              4: "parenthesis"
            },
            correctAnswer: "3"
          },
    
          {
            question: "Arrays in JavaScript cannot be used to store ",
            answers: {
              1: "numbers and strings",
              2: "other arrays",
              3: "booleans",
              4: "3rd party APIs"
            },
            correctAnswer: "4"
          }
    
      ];
      function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0){
          previousButton.style.display = 'none';
        }
        else{
          previousButton.style.display = 'inline-block';
        }
        if(currentSlide === slides.length-1){
          nextButton.style.display = 'none';
          submitButton.style.display = 'inline-block';
        }
        else{
          nextButton.style.display = 'inline-block';
          submitButton.style.display = 'none';
        }
      }
     
    // Begin Quiz
    buildQuiz()
    

    // Pagination
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();