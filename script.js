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

var questionCount = 1

var rightAnswer = 0

// var questionsAnswered = 0

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

answer1.addEventListener('click', selectAnswer)
answer2.addEventListener('click', selectAnswer)
answer3.addEventListener('click', selectAnswer)
answer4.addEventListener('click', selectAnswer)


function selectAnswer () {
    if (this.innerHTML === questions[questionCount].correctAnswer) {
        questionCount++
        rightAnswer++
      document.querySelector('.question_counter').innerHTML = questionCount
      document.querySelector('.question_points').innerHTML = rightAnswer
      startQuiz()
    } else  {alert('false') }
}

// Calling function to start quiz:
startQuiz()


// When user clicks answer, if clicked answer matches correctAnswer, score++
// Then move to next question --> questionCount++
// call startQuiz()