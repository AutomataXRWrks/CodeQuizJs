var timerText = document.querySelector('#timer');
var optionsContainer = document.querySelector('.answerButtons');
var questions = document.querySelector('.questions');
var questionContainer = document.querySelector('.question-container');
var initButton = document.querySelector('.start');
var initSubTitle = document.querySelector('.init-text');
var scores = document.querySelector('#show-h-scores');
var result = document.querySelector('#answer');
var buttons = document.createElement('button');
var gobButton = document.createElement('button');
var clearHScores = document.createElement('button');

var codeQuiz  = {
    scene: 0,
    secondsLeft: 60,
    score: 0,
    round: 0,
    isHScoreActive: true,
    hscores: ['Andy', 'Cesar', 'Manuel'],
    currentLocaStorageName: ["answer1", "answer2", "answer3", "answer4", "answer5"],
    questions: ['Commonly used data types Do Not Include:', 
    'The condition in an if / else statement is enclosed with _____.p',
    'Arrays in Javascript can be used to store _____. ', 
    ' String values must be enclosed within ____ when being assigned to variables.',
    'A very useful tool used during development and debugging for printing content to the debugger is:'],
    codeQuizAnswersTextO:  ["1. strings", "2.booleans" , "3. alerts" , "4. numbers"],
    codeQuizAnswersTextT:  ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    codeQuizAnswersTextTH:  ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    codeQuizAnswersTextF:  ["1. commas" , "2. curly brackets", "3. quotes", "4. parenthesis" ],
    codeQuizAnswersTextFV:  ["1. Javascript", "2. terminal/bash", "3. foor loops", "4. console.log"],
    codeQuizAnswers: ['3. alerts','3. parenthesis','4. all of the above','1. commas','4. console.log']

}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      codeQuiz.secondsLeft--;
      timerText.textContent =  "Time: " + codeQuiz.secondsLeft;
      console.log(codeQuiz.secondsLeft);
      if(codeQuiz.secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        createSumbitScore();
      } if (codeQuiz.scene == 5){
        clearInterval(timerInterval);
        timerText.textContent = "";
      }
  
    }, 1000);

    return codeQuiz.secondsLeft
  }

  function createButtons(scene){

    if(scene === 0){
    // Loops through divTags to set each one to have the color blue and the font size of 30px
    for (var i = 0; i < 4; i++) {
      var buttons = document.createElement('button');
      buttons.textContent = codeQuiz.codeQuizAnswersTextO[i];
      optionsContainer.appendChild(buttons);
    } 

  } else if(scene === 1){
    for (var i = 0; i < 4; i++){
      var buttons = document.createElement('button');
      buttons.textContent = codeQuiz.codeQuizAnswersTextT[i];
      optionsContainer.appendChild(buttons);  
    }
  }else if (scene === 2){
    for (var i = 0; i < 4; i++){
      var buttons = document.createElement('button');
      buttons.textContent = codeQuiz.codeQuizAnswersTextTH[i];
      buttons.setAttribute("style", "width: 31%;");
      optionsContainer.appendChild(buttons); 
  }
  } else if (scene === 3){
    for (var i = 0; i < 4; i++){
      var buttons = document.createElement('button');
      buttons.textContent = codeQuiz.codeQuizAnswersTextF[i];
      optionsContainer.appendChild(buttons); 
  }
  } else if (scene === 4){
    for (var i = 0; i < 4; i++){
      var buttons = document.createElement('button');
      buttons.textContent = codeQuiz.codeQuizAnswersTextFV[i];
      optionsContainer.appendChild(buttons); 
  }
  } 
}

  function createQuestions(scene){
    setTime();
    questions.textContent = "";
    initSubTitle.textContent = "";
    initButton.remove();
      if(scene === 0){
        questions.textContent = codeQuiz.questions[scene];
        questions.setAttribute("style" , "font-size: 55px; text-align: left;");
      } else if (scene === 1){
        questions.textContent = codeQuiz.questions[scene]; 
        questions.setAttribute("style" , "font-size: 55px; text-align: left;");
      } else if (scene === 2){
        questions.textContent = codeQuiz.questions[scene];
        questions.setAttribute("style" , "font-size: 60px; text-align: left;");   
      } else if (scene === 3){
        questions.textContent = codeQuiz.questions[scene];
        questions.setAttribute("style" , "font-size: 51px; text-align: left;"); 
      } else if (scene === 4){
        questions.textContent = codeQuiz.questions[scene];
        questions.setAttribute("style" , "font-size: 46px; text-align: left;");  
      }  else if (scene === 5){
        createSumbitScore();


      }  
  }

  function createHighScoreMenu(){
    codeQuiz.isHScoreActive = false;
    questions.textContent  = "High scores";
    questions.setAttribute("style" , "text-align: left");
    for (i = 0; i < codeQuiz.hscores.length; i++){
      var listHS = document.createElement("div");
      listHS.setAttribute("style" , "font-size:30px; height; 50%; margin:1rem; background-color: rgba(217, 211, 233);");
      questionContainer.appendChild(listHS);
      listHS.textContent = codeQuiz.hscores[i];
      console.log(codeQuiz.hscores[i]);
    }
    gobButton.textContent = "Go back";
    gobButton.setAttribute("class", "goback");
    clearHScores.textContent = "Clear high scores"
    clearHScores.setAttribute("style", "display: inline");
    clearHScores.setAttribute("class", "clearhs");
    questionContainer.append(gobButton,clearHScores);
    initSubTitle.textContent = "";
    timerText.textContent = "";
    initButton.remove();
    optionsContainer.remove();
    result.remove();
  }

  function createSumbitScore(){

    initButton.remove();
    optionsContainer.remove();
    result.remove();
    questions.textContent = 'All Done!';
    questions.setAttribute("style" , "font-size: 60px; text-align: left; font-family: Arial, Helvetica, sans-serif;");
    initSubTitle.textContent = 'Your final score is ' + codeQuiz.score;
    initSubTitle.setAttribute('style', "font-size: 45px; padding-top:.5rem;font-family: Arial, Helvetica, sans-serif;");
    var userNameContainer = document.createElement('div');
    userNameContainer.setAttribute('style', " height:20%; ");
    var initials = document.createElement('div');
    initials.textContent = 'Enter initals';
    initials.setAttribute("style" , "display:inline;  font-size: 38px; width:40%; margin:.5rem; font-family: Arial, Helvetica, sans-serif;");
    var inputInitials = document.createElement('input');
    inputInitials.setAttribute("style", "display:inline; width:50%; height:35%;");
    var buttonSubmit = document.createElement('button');
    buttonSubmit.setAttribute("class" , "submitscore");
    buttonSubmit.textContent = 'Submit';
    userNameContainer.appendChild(initials,);
    userNameContainer.appendChild(inputInitials);
    userNameContainer.appendChild(buttonSubmit);
    questionContainer.appendChild(userNameContainer);
    buttonSubmit.addEventListener('click', function(event){
      event.stopPropagation();
      location.reload();
      //codeQuiz.hscores.push(scores);
      //localStorage.setItem(inputInitials.value + scores);
      
    });
  }


function evaluateScore(){

  var resultButon = localStorage.getItem(codeQuiz.currentLocaStorageName[codeQuiz.scene-1]);
  for (i = 0; i < 6; i++){
    if(codeQuiz.scene === i){
      if(resultButon === codeQuiz.codeQuizAnswers[codeQuiz.scene-1]){
        console.log(codeQuiz.codeQuizAnswers[codeQuiz.scene-1]);
        codeQuiz.score += 4;
        console.log(codeQuiz.score);
      } else{
        codeQuiz.score += 0;
        console.log(codeQuiz.score);     
      }
    }
  }   
}

  scores.addEventListener("click", function(event) {

    var element = event.target;
    if(element && codeQuiz.isHScoreActive){
      createHighScoreMenu();
    }
  });

initButton.addEventListener('click', function(event){
    createQuestions(codeQuiz.scene);
    createButtons(codeQuiz.scene);
    //console.log('current scene', codeQuiz.scene);
});

optionsContainer.addEventListener("click", function(event) {
  event.preventDefault();
  var element = event.target;
  //console.log(element);
  if(element){
    codeQuiz.scene++;
    optionsContainer.innerHTML = "";
    createQuestions(codeQuiz.scene);
    createButtons(codeQuiz.scene);
    console.log('current scene', codeQuiz.scene);
    var banswer = element.textContent;
    localStorage.setItem(codeQuiz.currentLocaStorageName[codeQuiz.scene-1], banswer);
    evaluateScore();
  } 
});


gobButton.addEventListener('click', function(event){
  event.stopPropagation();
  //gobButton.remove();
  //clearHScores.remove();
  //createQuestions(codeQuiz.scene);
  //createButtons(codeQuiz.scene);
  location.reload();
  codeQuiz.isHScoreActive = false;
});

  function init(){
    //setTime();
    //createButtons(codeQuiz.scene);
    //createQuestions(codeQuiz.scene);

  }

  function levelLogic(){
    console.log('level logic');

  }

  init();
