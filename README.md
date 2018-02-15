# Project1

## Description: 

This project was the first project for General Assembly WDI 21. The aim of the project was to practice and learn skills in HTML, CSS, and Javascript with the end goal of creating a functional game. Since the goal of this project was to create a game, this project should be used for fun! 

In general this project touched on the basics of setting up and integrating HTML, CSS, and Javascript-- making sure each different file was linked and worked together to create both style and functionality. 


## List of Features + Setup: 

This project is a stand-alone game meant to be played through (but not too many times, because then you would know all the answers!). This game is based on how a basic trivia/ quiz works. The user is presented with a question and four answers they can choose from. Each game variable is defined at the start of the JS file-- these variables contribute to linking elements in the HTML with the JS so that DOM manipulation can be used to change and update items in the HTML. All quiz questions and answers are defined in an array. Each answer has an event listener attached that "listens" for a click and uses a function (defined after) to select an answer.

The game's main goal is to show users questions and answers and then use JS to anaylze the answer the user clicks and determine if the answer they clicked is the right answer. The game will only move to the next question if the correct answer is clicked. Additionally, there is a question counter on the upper left side that shows the user which question they are on (out of 10 total questions) as well as how many points they have scored (also out of 10 points). The JS uses and if/ else structure-- if the correct answer is clicked the score and question count is updated and the next question loads. To end the game another if/ else structure is used-- if the length of the question array is greater than the question count then the game is over, if not the game is still in play. In other words, if the user has reached the 10th question then the game is over, since the array lenght of the questions is 10. If not they can continue play until they've reached question 10. 

Obviously the MVP of this project was to get the game to run through each question and answer. At the very base, I wanted this functionality to work so that even if the game didn't have fancy features a user could still play. From there I built on the functionality  into the bronze/ silver category by creating a question counter and a points counter. Another feature included in this was a function to end the game. If I had more time/ skill I would look into adding a way for a user to submit another answer, outside of the answers listed. I would also think about adding a timed function so that a user only had 15 seconds (or something like that) to answer each question. One additional function to add would be something that recorded a user's score and/ or time spent playing. 


## List of Technologies Used: 
- HTML
- CSS 
- JS 




