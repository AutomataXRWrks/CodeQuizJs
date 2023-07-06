var timerText = document.querySelector('#timer');
var optionsContainer = document.querySelector('.answerButtons');
var questions = document.querySelector('.questions');
var questionContainer = document.querySelector('.question-container');
var initButton = document.querySelector('.start');
var initSubTitle = document.querySelector('.init-text');
var scores = document.querySelector('#show-h-scores');
var result = document.querySelector('#answer');
var buttons = document.createElement('button');

var codeQuiz  = {
    scene: 0,
    secondsLeft: 60,
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
    codeQuizAnswers: ['anwser1','answer2','answer3','answer4','answer5']

}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      codeQuiz.secondsLeft--;
      timerText.textContent =  "Time: " + codeQuiz.secondsLeft;
  
      if(codeQuiz.secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
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
        questions.setAttribute("style" , "font-size: 55px", "text-align: left");
      } else if (scene === 1){
        questions.textContent = codeQuiz.questions[scene]; 
        questions.setAttribute("style" , "font-size: 55px", "text-align: left");
      } else if (scene === 2){
        questions.textContent = codeQuiz.questions[scene];
        questions.setAttribute("style" , "font-size: 60px" , "text-align: left");   
      } else if (scene === 3){
        questions.textContent = codeQuiz.questions[scene];
        questions.setAttribute("style" , "font-size: 51px" , "text-align: left");
        console.log(questions.style);      
      } else if (scene === 4){
        questions.textContent = codeQuiz.questions[scene];
        questions.setAttribute("style" , "font-size: 46px", 'text-align: left');  
      }  
  }


  scores.addEventListener("click", function(event) {
    var element = event.target;
    if(element){
      questions.textContent  = "High scores";
      questions.setAttribute("style" , "text-align: left");
      var gobButton = document.createElement('button');
      gobButton.textContent = "Go back";
      gobButton.setAttribute("class", "goback");
      var clearHScores = document.createElement('button');
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
  });

initButton.addEventListener('click', function(event){
  event.preventDefault();
  //console.log(event);
    createQuestions(codeQuiz.scene);
    createButtons(codeQuiz.scene);
});

optionsContainer.addEventListener("click", function(event) {
  var element = event.target;
  if(element.textContent == "3. alerts"){
    codeQuiz.scene++;
    optionsContainer.innerHTML = "";
    createQuestions(codeQuiz.scene);
    createButtons(codeQuiz.scene);

  } if(element.textContent == "3. parenthesis"){
    codeQuiz.scene++;
    optionsContainer.innerHTML = "";
    createQuestions(codeQuiz.scene);
    createButtons(codeQuiz.scene);

  }if(element.textContent == "4. all of the above"){
    codeQuiz.scene++;
    optionsContainer.innerHTML = "";
    createQuestions(codeQuiz.scene);
    createButtons(codeQuiz.scene);
    
  }if(element.textContent == "3. quotes"){
    codeQuiz.scene++;
    optionsContainer.innerHTML = "";
    createQuestions(codeQuiz.scene);
    createButtons(codeQuiz.scene);
    
  }if(element.textContent == "4. console.log"){
    codeQuiz.scene++;
    optionsContainer.innerHTML = "";
    createSumbitScore();

    
  }
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
