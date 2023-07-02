var timerText = document.querySelector('#timer');

var secondsLeft = 10;
var scene = 0;


var codeQuiz  = {
    questions: ['Arrays in Javascript are used to store', 'Commonly'],
    codeQuizAnswersText1:  [''],
    codeQuizAnswersText1:  [''],
    codeQuizAnswersText1:  [''],
    codeQuizAnswersText1:  [''],
    codeQuizAnswersText1:  [''],
    codeQuizAnswers: ['anwser1','answer2','answer3','answer4','answer5']

}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft++;
      timerText.textContent =  "Time:" + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);

    return secondsLeft
  }

  function init(){
    setTime();
    console.log('init');
  }


  init();