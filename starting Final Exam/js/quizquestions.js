/*
IN THESE COMMENTS, DESCRIBE IN DETAIL WHAT THE FOLLOWING PIECE OF CODE IS DOING  

*/

const Question = (text, choices, answer) => ({
  text,
  choices,
  answer,
  isCorrectAnswer: (choice) => choice === answer,
});

const initialQuizState = {
  score: 0,
  currentQuestionIndex: 0,
  questions: [
    Question("Which one is a client-side language?", ["Python", "JavaScript", "PHP", "Perl"], "YOUR ANSWER HERE"),
    Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS/CSS3", "XML"], "YOUR ANSWER HERE"),
    Question("Which can be used for object-oriented code?", ["HTML5", "CSS3", "JavaScript", "None"], "YOUR ANSWER HERE"),
    Question("What is implemented in mobile-first design?", ["HTML5", "CSS3", "Media Queries", "All"], "YOUR ANSWER HERE"),
    Question("MVC is a _____.", ["Language", "Library", "Framework", "All"], "YOUR ANSWER HERE"),
  /* ADD MORE QUESTIONS FROM QUESTIONS.TXT. MAKE SURE TO INCLUDE THE CORRECT ANSWER IN ALL OF THESE QUESTIONS */
  ],
};

/* 
IN THESE COMMENTS, DESCRIBE IN DETAIL WHAT THE FOLLOWING PIECE OF CODE IS DOING 


*/
const guessAnswer = (state, answer) => ({
  ...state,
  score: state.questions[state.currentQuestionIndex].isCorrectAnswer(answer) ? state.score + 1 : state.score,
  currentQuestionIndex: state.currentQuestionIndex + 1,
});

const getCurrentQuestion = (state) => state.questions[state.currentQuestionIndex];

const hasEnded = (state) => state.currentQuestionIndex >= state.questions.length;

let currentQuizState = initialQuizState;

/*
Make a function or function reference called displayNext that takes state as a 
parameter and test whether hasEnded(state) is true. If so, run displayScore(state).
Otherwise run:
  displayQuestion(state);
  displayChoices(state);
  displayProgress(state);

*/



/*
Make a function or function reference called displayQuestion that will take state as a parameter.
Inside the function, set currentQuestion to the return result of the getCurrentQuestion 
function that takes state as an argument.
Run the populateIdWithHTML function with the string "question" as the first 
argument and currentQuestion.text as the second argument
*/


/* 
IN THESE COMMENTS, DESCRIBE IN DETAIL WHAT THE FOLLOWING PIECE OF CODE IS DOING 
 
*/

const displayChoices = (state) => {
  const choices = getCurrentQuestion(state).choices;
  for (let i = 0; i < choices.length; i++) {
    populateIdWithHTML(`choice${i}`, choices[i]);
    guessHandler(`guess${i}`, choices[i]);
  }
};


/* 
IN THESE COMMENTS, DESCRIBE IN DETAIL WHAT THE FOLLOWING PIECE OF CODE IS DOING 


*/
const displayScore = (state) => {
  const gameOverHTML = `<h2>Results</h2>
                         <h2> Your score is: ${state.score}/${state.questions.length}</h2>`;
  populateIdWithHTML("quiz", gameOverHTML);
};

/*


Create a function or function reference called displayProgress that takes state as a parameter


Inside, set currentQuestionNumber to the state object's currentQuestionIndex + 1

After that, still inside the function, run the populateIdWithHTML function

The first argument of of populateIdWithHTML is the string "progress" 
and the second is a template string figuring out which number you are on out of how many questions.



*/



/* 
IN THESE COMMENTS, DESCRIBE IN DETAIL WHAT THE FOLLOWING PIECE OF CODE IS DOING 


*/

const populateIdWithHTML = (id, text) => {
  document.getElementById(id).innerHTML = text;
};

/* 
IN THESE COMMENTS, DESCRIBE IN DETAIL WHAT THE FOLLOWING PIECE OF CODE IS DOING 

Note that the event handler is not using addEventListener

*/
const guessHandler = (id, guess) => {
  document.getElementById(id).onclick = () => {
    currentQuizState = guessAnswer(currentQuizState, guess);
    displayNext(currentQuizState);
  };
};

/* 
Call displayNext with currentQuizState
*/
// Initializing the quiz

