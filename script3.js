const questions = [
  {
    question: "Kim jest tajny agent?",
    optionA: "Dominik Dziułka",
    optionB: "Bruno Wieczorek",
    optionC: "asp. Michał Kowalski",
    optionD: "Wiwiana Lebiodzik",
    correctOption: 3
  },
  {
    question: "Kim jest naprawdę detektyw Miś?",
    optionA: "Nie wiadomo",
    optionB: "asp. Michał Kowalski",
    optionC: "Terry Crews",
    optionD: "Wiwiana Lebiodzik",
    correctOption: 1
  },
  {
    question: "Jaka alternatywna kariera czekała na asp. Michała Kowalskiego?",
    optionA: "Polityk",
    optionB: "Fizyk teoretyczny",
    optionC: "Aktor w hollywood",
    optionD: "Kreator kontentu OnlyFans",
    correctOption: 2
  },
  {
    question: "2+2*2 ?",
    optionA: "6",
    optionB: "8",
    optionC: "7",
    optionD: "12",
    correctOption: 0
  }
]
let questionNumber = 1;
let indexNumber = 0;
var answer = null;
var score = 0;
var checkFlag = 0;
var focusFlag = 0;
const buttonLogin = document.getElementById("login-button-id");

var answers = [];
answers[0] = document.getElementById("answer-one-label");
answers[1] = document.getElementById("answer-two-label");
answers[2] = document.getElementById("answer-three-label");
answers[3] = document.getElementById("answer-four-label");

answers[0].onmouseover = function () { if (focusFlag === 0) { answers[0].style.backgroundColor = "#597773"; } };
answers[0].onmouseleave = function () { if (focusFlag === 0) { answers[0].style.backgroundColor = "#24433fab"; } };
answers[1].onmouseover = function () { if (focusFlag === 0) { answers[1].style.backgroundColor = "#597773"; } };
answers[1].onmouseleave = function () { if (focusFlag === 0) { answers[1].style.backgroundColor = "#24433fab"; } };
answers[2].onmouseover = function () { if (focusFlag === 0) { answers[2].style.backgroundColor = "#597773"; } };
answers[2].onmouseleave = function () { if (focusFlag === 0) { answers[2].style.backgroundColor = "#24433fab"; } };
answers[3].onmouseover = function () { if (focusFlag === 0) { answers[3].style.backgroundColor = "#597773"; } };
answers[3].onmouseleave = function () { if (focusFlag === 0) { answers[3].style.backgroundColor = "#24433fab"; } };


buttonLogin.onmouseover = function(){
  buttonLogin.innerHTML = "";
  buttonLogin.style.background = "#597773";
  buttonLogin.style.backgroundImage = "url('/resources/Login.png')";
  buttonLogin.style.backgroundSize = "cover";
  buttonLogin.style.width = "160px";
  buttonLogin.style.height = "42px";


};
buttonLogin.onmouseleave = function(){
  buttonLogin.style.background = "#24433fab";
  buttonLogin.innerHTML = "Zatwierdź";


};


var input = document.getElementById("password-id");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {

    event.preventDefault();
    document.getElementById("login-button-id").click();
  }
});
var input2 = document.getElementById("username-id");
input2.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {

    event.preventDefault();
    document.getElementById("login-button-id").click();
  }
});

function nextQuestion() {
  checkFlag = 0;
  focusFlag = 0;
  answers[0].style.backgroundColor = "#24433fab";
  answers[1].style.backgroundColor = "#24433fab";
  answers[2].style.backgroundColor = "#24433fab";
  answers[3].style.backgroundColor = "#24433fab";
  const currentQuestion = questions[indexNumber];

  // document.getElementById("answer-one").value = "off";
  // document.getElementById("answer-two").value="off";
  // document.getElementById("answer-three").value= "off";
  // document.getElementById("answer-four").value= "off";

  console.log(indexNumber);

  if (indexNumber < 4) {

    document.getElementById("question").innerHTML = currentQuestion.question;
    document.getElementById("answer-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("answer-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("answer-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("answer-four-label").innerHTML = currentQuestion.optionD;
  } else {
    endgameHandle();
    checkFlag = 1;
  }


}


function answered(answerNr) {



  answers[0].style.backgroundColor = "#24433fab";
  answers[1].style.backgroundColor = "#24433fab";
  answers[2].style.backgroundColor = "#24433fab";
  answers[3].style.backgroundColor = "#24433fab";

  answers[answerNr].style.backgroundColor = "orange";
  focusFlag = 1;

  answer = answerNr;

  console.log(answer);

}

function checkQuestion() {

  if (answer != null && checkFlag === 0 && indexNumber < 4) {
    answers[questions[indexNumber].correctOption].style.backgroundColor = "green";





    if ((answer === questions[indexNumber].correctOption) && checkFlag === 0) {
      score++;
      console.log("wynik: " + score);
      checkFlag = 1;

    }
    checkFlag = 1;
    indexNumber++;
    if (indexNumber === 4) {

      document.getElementById("nextBtn").innerText = "Podsumowanie";
    }
  }
}

function endgameHandle() {

  var modal = document.getElementById("endgameModal");
  document.getElementById("quiz").style.display = "none";
  switch (score) {
    case 0:

    document.getElementById("questions-answered-id").innerHTML = "zero pytań. Trudno, podwyżki nie będzie."
      break;

    case 1:

    document.getElementById("questions-answered-id").innerHTML = "jedno pytanie."
      break;

    case 2:

    document.getElementById("questions-answered-id").innerHTML = "dwa pytania, całkiem nieźle!"
      break;

    case 3:

    document.getElementById("questions-answered-id").innerHTML = "trzy pytania, jestem z Was dumny, detektywi!"
      break;

    case 4:

    document.getElementById("questions-answered-id").innerHTML = "wszystkie pytania. Szykujcie się na awans!"
      break;

  }


 
  modal.style.display = "block";

}

"login"

function closeModal() {
  var modal = document.getElementById("endgameModal");
  var loginform = document.getElementById("login");
  loginform.style.display = "block";



  modal.style.display = "none";


}

function loginHandler() {
  var uname = document.getElementById("username-id").value;
  const correctUname = "Wiwiana Lebiodzik";


  var pwd = document.getElementById("password-id").value;
  const correctPwd = "D2F869";

  if (uname === correctUname && pwd === correctPwd) {
    document.getElementById("login").style.display = "none";
    document.getElementById("congratulations").style.display = "block";

  } else {
    document.getElementById("wrongPsw").style.display = "block";
  }


}