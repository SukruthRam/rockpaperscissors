var userScore = 0;
var computerScore = 0;
const user_score_span = document.getElementById("userscore");
const comp_score_span = document.getElementById("compscore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_dev = document.getElementById("r");
const paper_dev = document.getElementById("p");
const scissors_dev = document.getElementById("s");

function computer(){
  const comp_choice = ['r','p','s'];
  const randomNum = Math.floor(Math.random() * 3);
  return comp_choice[randomNum];
}

computer();

function convertWord(word)
{
  if(word == "r") return "Rock";
  if(word == "p") return "Paper";
  if(word == "s") return "Scissors"
}
function win(user,computer) {
  console.log("WIN !!!");
  userScore++;

  user_score_span.innerHTML = userScore;
  comp_score_span.innerHTML = computerScore;
  const u = "user".fontsize(3).sub();
  const c = "computer".fontsize(3).sub();
  result_p.innerHTML = convertWord(user) +u+ " beats " + convertWord(computer)+c;
  document.getElementById(user).classList.add('greenglow');
  setTimeout(function(){document.getElementById(user).classList.remove('greenglow')},300);



}
function loose(user,computer) {
  //console.log("LOOSE !!!");
  console.log("WIN !!!");
  computerScore++;

  user_score_span.innerHTML = userScore;
  comp_score_span.innerHTML = computerScore;
  const u = "user".fontsize(3).sub();
  const c = "computer".fontsize(3).sub();
  result_p.innerHTML = convertWord(user) +u+ " loses to " + convertWord(computer)+c;
  document.getElementById(user).classList.add('redglow');
  setTimeout(function(){document.getElementById(user).classList.remove('redglow')},300);

}
function draw(user,computer) {
  const u = "user".fontsize(3).sub();
  const c = "computer".fontsize(3).sub();
  result_p.innerHTML = convertWord(user) +u+ " equals to " + convertWord(computer)+c+" .Its a DRAW !!!";
  document.getElementById(user).classList.add('greayglow')
  console.log("gery")
  setTimeout(function(){document.getElementById(user).classList.remove('greayglow')},300);

}
function game(userChoice) {

  //console.log("the choice is "+userChoice);
  const compChoice = computer();
  //console.log(userChoice+compChoice);

  switch (userChoice+compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,compChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      loose(userChoice,compChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice,compChoice);
      break;

  }

}

function main(){
  rock_dev.addEventListener('click', function(){
      game("r");
  })

  paper_dev.addEventListener('click', function(){
      game("p");
  })

  scissors_dev.addEventListener('click', function(){
      game("s");
  })
}

main();
