+// You'll want to wrap all of the below JavaScript in an immediately-invoked function expression (IIFE) - e.g.:
+// (function () {
+//   // All of your code goes here
+// })()

// Great comments describing each section of your code!

// Defining game variables:
var questionField = document.getElementById('question_field')

var answer1 = document.querySelector('.answer1')

var answer2 = document.querySelector('.answer2')

var answer3 = document.querySelector('.answer3')

var answer4 = document.querySelector('.answer4')

var answerSection = document.querySelector('.section2')

var points = document.querySelector('.question_points')

var questionNumber = document.querySelector('.question_counter')

var questionPicker = []

var questionCount = 0

var rightAnswer = 0

var questionsCounted = 1

// To keep this file less cluttered and busy, you could consider creating another js file and put this whole question array below in it.
// Just link the js file with the questions into the HTML file first, then link the other js file.

// All quiz questions below:
const questions = [
  {
    question: 'How many species of lions are there?',
    answers: {
      a: 'What is a lion?',
      b: 'Four',
      c: 'Three',
      d: 'One'
    },
    correctAnswer: 'One'
  },

  {
    question: 'What do lions eat?',
    answers: {
      a: 'My ex best friend',
      b: 'Zebras',
      c: 'Rhinos',
      d: 'Avocado toast, duh'
    },
    correctAnswer: 'My ex best friend'
  },

  {
    question: "What's the best Disney movie?",
    answers: {
      a: 'Beauty and the Beast',
      b: 'Cinderella',
      c: 'The Lion King',
      d: 'Mulan'
    },
    correctAnswer: 'The Lion King'
  },

  {
    question: "Was the song 'Circle of Life' my alarm clock for 6 months?",
    answers: {
      a: 'Yas',
      b: 'Are you crazy?!',
      c: 'Nope',
      d: 'Maybe for one week...'
    },
    correctAnswer: 'Yas'
  },

  {
    question: 'This song was also in the Lion King',
    answers: {
      a: 'Under the Sea',
      b: 'Can you Feel the Love Tonight',
      c: "I'll Make a Man out of You",
      d: "You'll be in my Heart"
    },
    correctAnswer: 'Can you Feel the Love Tonight'
  },

  {
    question: 'Outside of Africa lions live in...',
    answers: {
      a: 'Iran',
      b: 'Afghanistan',
      c: 'Russia',
      d: 'India'
    },
    correctAnswer: 'India'
  },
  {
    question: 'What does Hakuna Matata mean?',
    answers: {
      a: 'Huh?',
      b: "It's a problem free philosophy",
      c: 'No worries',
      d: "It's chill bro"
    },
    correctAnswer: 'No worries'
  },
  {
    question: 'The average lifespan of a wild lion is...',
    answers: {
      a: '5-10 years',
      b: '10-15 years',
      c: '15-20 years',
      d: '20-25 years'
    },
    correctAnswer: '15-20 years'
  },
  {
    question: "Simba just can't wait to...",
    answers: {
      a: 'Take a nap',
      b: 'Hang out with Nala',
      c: 'Sing some songs',
      d: 'Be king'
    },
    correctAnswer: 'Be king'
  },

  {
    question: 'Which other wild cat has a mane, aside from the lion?',
    answers: {
      a: 'My house cat is wild does that count?',
      b: 'No other cats are as cool as lions',
      c: 'Jaguar',
      d: 'Mountain Lion'
    },
    correctAnswer: 'No other cats are as cool as lions'
  }
]

// Setting up quiz function, adding in questions and answers and event listener:
function startQuiz () {
  document.getElementById('question_field').innerHTML = questions[questionCount].question
  document.querySelector('.answer1').innerHTML = questions[questionCount].answers.a
  document.querySelector('.answer2').innerHTML = questions[questionCount].answers.b
  document.querySelector('.answer3').innerHTML = questions[questionCount].answers.c
  document.querySelector('.answer4').innerHTML = questions[questionCount].answers.d

}

// Creating game logic so question count and game points update:
function selectAnswer () {
    if (this.innerHTML === questions[questionCount].correctAnswer) {
        questionCount++
        rightAnswer++
      // once you answer the last question, the total goes to '11/10', so you could put an if statement around the questionsCounted incrementer:
      if (questionsCounted < 10) {
        questionsCounted++
      }
      document.querySelector('.question_counter').innerHTML = questionsCounted + "/10"
      document.querySelector('.question_points').innerHTML = rightAnswer
      if (questionCount < questions.length) {
        startQuiz()
    } else {
        {alert ('Game Over!') 
    }
    }} else {alert('false') }
}
// ^^ Try to think about how you could break up the logic in selectAnswer into more functions,
// so that one function isn't such a large block of code.

// Calling function to start quiz:
startQuiz()

// Best practice is to put event listeners at the bottom of your JS file:

// It would be more efficient to put an event listener on the parent container of the answer elements (class "section2").
// Then to see which answer was selected, you could use the evt.target in the function below.
answer1.addEventListener('click', selectAnswer)
answer2.addEventListener('click', selectAnswer)
answer3.addEventListener('click', selectAnswer)
answer4.addEventListener('click', selectAnswer)

// To create a timer, you can use the setInterval() function
// It can be tricky to use at first (documentation here: https://www.w3schools.com/jsref/met_win_setinterval.asp):
// First declare a variable to hold the time:
  // var gameTimer
// Then create a function in which you set the timer equal to the setInterval function:
  // gameTimer = setInterval(function () {
  //   timer--
  // }, 1000)
// Then create a function that can be called to stop the timer. That function will
  // clearInterval(gameTimer)