$(document).ready(function(){

  var userScore = 0;
  var computerScore = 0;
  var userScore_span= document.getElementById("user-score");
  var computerScore_span = document.getElementById("computer-score");
  var scoreBoard_div = document.querySelector(".score-board");
  var result_p = document.querySelector(".result");
  var rock_div = document.getElementById("r");
  var paper_div = document.getElementById("p");
  var scissors_div = document.getElementById("s");
  var gun_div = document.getElementById("g");
  var bomb_div = document.getElementById("b");
  var outcome_div = document.getElementById("outcomeText");
  var computer_p = document.querySelector(".computerChoiceprint");

function getComputerChoice() {
  var choices = ["r", "p", "s", "b", "g"];
  var randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}
function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  outcome_div.innerHTML = ("WINNER WINNER CHICKEN DINNER");
  computer_p.innerHTML = ("COMPUTER CHOOSES " + getComputerChoice());
  console.log("WIN");
  if (userScore === 5) {
    alert("YOURE THE BIG WINNER");
  }
}
function lose() {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  outcome_div.innerHTML = ("BIG LOSER");
  computer_p.innerHTML = ("COMPUTER CHOOSES " + getComputerChoice());
  console.log("LOSE");
  if (computerScore === 5) {
    alert("YOURE THE BIG WINNER");
  }
}
function draw(user) {
outcome_div.innerHTML = ("Really? So many options and you draw?");
  computer_p.innerHTML = ("COMPUTER CHOOSES " + getComputerChoice());
  console.log("DRAW");
}
function game(userChoice) {
  var computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
      win();
      break;
    case "rg":
    case "pr":
    case "pg":
    case "sp":
    case "sb":
    case "gb":
    case "gs":
    case "br":
    case "bp":
    win();
    break;
    case "sr":
    case "sg":
    case "rb":
    case "rp":
    case "ps":
    case "pb":
    case "gr":
    case "gp":
    case "bg":
    case "bs":
    lose();
    break;
    case "ss":
    case "rr":
    case "pp":
    case "gg":
    case "bb":
    draw();
  }
}
game("c");
function main() {
    rock_div.addEventListener("click", function () {
      game("r");
    });
    paper_div.addEventListener("click", function () {
      game("p");
    });
    scissors_div.addEventListener("click", function () {
    game("s");
  });
    bomb_div.addEventListener("click", function () {
      game("b");
    });
    gun_div.addEventListener("click", function () {
      game("g");
    });
}

main();
});
