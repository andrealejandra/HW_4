//variables
const submitBtn = document.getElementById("submit")
const startBtn = document.getElementById("start")
var timeEl = document.getElementById("time")
var questionContainerEl = document.getElementById("questionContainer")
var currentQuestion = 0;
var Incorrect = 0
var Correct = 0
timeEl = 0

//submit button
$("#submit").hide()
//start button 
$("#start").click(function(){
initiateQuiz();
timeEl = questions.length*15
}
)
function initiateQuiz (){
  $("#start").hide();
  $("#displaytxt").hide();
  showQuestion();
 
}

function showQuestion(){
var question = questions[currentQuestion].question;
var choices = questions[currentQuestion].answers;
var results = "";
$("#question").html(question);
for (var i = 0; i< choices.length;i++ ){
results = results + (`<button class='btn btn-primary col-sm m-2 choice' data-answer='${choices[i]}'>${choices[i]}</button>`)
$("#choices").html(results);
}
}

$(document).on("click", ".choice", function(){
  var clicked = $(this).attr("data-answer");
  var correct = questions[currentQuestion].correctAnswer;
  console.log (clicked)
  //if else //compare selected answer to correct answer and tally w/ if/else then show next question by currentQuestion ++
  if (clicked === correct){
    console.log("right");
    Correct++;
    timeEl + 5

  } else {
    Incorrect++;
    timeEl - 5
  }
  console.log(Correct)
})


//function startTimer(){
 // for (var i = 0; i + questions.length*15;)
//timeEl = i
// start timer
// var timeInterval = setInterval(function() {
//     timeEl.textContent = timeLeft;
//     timeLeft--;

//     if (timeLeft === 0) 
//       clearInterval(timeInterval);
//     }
// }
//after question is answered, another question is shown
//
function submission(){
//on submission click, calculate total score
//prompt initials (max of 3)
//save to local storage
    localStorage.setItem("score", JSON.stringify(score));
    var score = JSON.parse(localStorage.getItem("score"));
}
