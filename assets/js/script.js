var timerText = document.querySelector('#timer');
var questionContainer = document.querySelector('.answerButtons');
var questions = document.querySelector('.questions');

var secondsLeft = 60;
var scene = 0;


var codeQuiz  = {
    scene: 0,
    questions: ['Commonly used data types Do Not Include:', 'Arrays in Javascript are used to store', 'Commonly'],
    codeQuizAnswersTextO:  ["1. strings", "2.booleans" , "alerts" , "numbers"],
    codeQuizAnswersTextT:  [''],
    codeQuizAnswersTextTH:  [''],
    codeQuizAnswersTextF:  [''],
    codeQuizAnswersTextFV:  [''],
    codeQuizAnswers: ['anwser1','answer2','answer3','answer4','answer5']

}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerText.textContent =  "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);

    return secondsLeft
  }

  function createButtons(scene){

    if(scene === 0){

    // Loops through divTags to set each one to have the color blue and the font size of 30px
    for (var i = 0; i < 4; i++) {
      var buttons = document.createElement('button');
      buttons.textContent = codeQuiz.codeQuizAnswersTextO[i];
      //buttons.setAttribute("style" , "border-radius: 15%; font-size: 25px; margin: 1rem; background-color: blueviolet; display: block;");
      questionContainer.appendChild(buttons);
    }

  }

  
  }

  function createQuestions(scene){
    if(scene === 0){
      questions.textContent = codeQuiz.questions[scene];
      //buttons.setAttribute("style" , "border-radius: 15%; font-size: 25px; margin: 1rem; background-color: blueviolet; display: block;");  
    }
  }

  function init(){
    setTime();
    createButtons(codeQuiz.scene);
    createQuestions(codeQuiz.scene);
    //console.log(codeQuiz.codeQuizAnswersText1[1]);
  }


  init();