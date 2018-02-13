// Defining game variables: 


var questionField = document.querySelector('#question_field')

var answer1 = document.querySelector('#section2 .answer1')

var answer2 = document.querySelector('#section2 .answer2')

var answer3 = document.querySelector('#section2 .answer3')

var answer4 = document.querySelector('#section2 .answer4')

var answerSection = document.querySelector('.section2')

var points = document.querySelector('#section1 .question_points')

var questionNumber = document.querySelector('#section1 .question_counter')
















// All quiz questions below:

const questions = [

{
    question1: "How many species of lions are there?",
    answers: {
        a: "What's a lion?",
        b: "Four",
        c: "Three",
        d: "One",
    },
    correctAnswer: "d"
},

{
    question2: "What do lions eat?",
    answers: {
        a: "My ex best friend",
        b:  "Zebras",
        c:  "Rhinos",
        d:  "Avocado toast, duh",
    },
    correctAnswer: "a"
},

{
    question3: "What's the best Disney movie?",
    answers: {
        a: "Beauty and the Beast",
        b: "Cinderella",
        c: "The Lion King",
        d: "Mulan",
    },
    correctAnswer: "c"
},

{
    question4: "Was the song 'Circle of Life' my alarm clock for 6 months?",
    answers: {
        a: "Yas",
        b: "Are you crazy?!",
        c: "Nope",
        d: "Maybe for one week...",
    },
    correctAnswer: "a"
},

{
    question5: "This song was also in the Lion King",
    answers: {
        a: "Under the Sea",
        b: "Can you Feel the Love Tonight",
        c: "I'll Make a Man out of You",
        d: "You'll be in my Heart"
    },
    correctAnswer: "b"
},

{
    question6: "Outside of Africa lions live in...",
    answers: {
        a: "Iran",
        b: "Afghanistan",
        c: "Russia",
        d: "India",
    },
    correctAnswer: "d"
},

    question7: "What does Hakuna Matata mean?",
    answers: {
        a: "Huh?",
        b: "It's a problem free philosophy",
        c: "No worries",
        d: "It's chill bro",
    },
    correctAnswer: "c"
},

    question8: "The average lifespan of a wild lion is...",
    answers: {
        a: "5-10 years",
        b: "10-15 years",
        c: "15-20 years",
        d: "20-25 years",
    },
    correctAnswer: "c"
},

    question9: "Simba just can't wait to...",
    answers: {
        a: "Take a nap",
        b: "Hang out with Nala",
        c: "Sing some songs",
        d: "Be king",
    },
    correctAnswer: "d"
},

{
    question10: "Which other wild cat has a mane, aside from the lion?",
    answers: {
        a: "My house cat is wild does that count?",
        b: "No other cats are as cool lions",
        c: "Jaguar",
        d: "Mountain Lion",
    },
    correctAnswer: "b"
}
]