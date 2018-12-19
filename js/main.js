$(document).ready(function(){

  var userScore = 0;
  var userScore2 = 0;
  var computerScore = 0;
  var userScore_span= document.getElementById("user-score");
  var userScore2_span = document.getElementById("user2-score");
  var computerScore_span = document.getElementById("computer-score");
  var scoreBoard_div = document.querySelector(".score-board");
  var result_p = document.querySelector(".result");
  var rock_div = document.getElementById("ROCK");
  var paper_div = document.getElementById("PAPER");
  var scissors_div = document.getElementById("SCISSORS");
  var gun_div = document.getElementById("GUN");
  var bomb_div = document.getElementById("BOMB");
  var outcome_div = document.getElementById("outcomeText");
  var computer_p = document.querySelector(".computerChoiceprint");
  var outcomeUser2_div = document.getElementById("user2user2Choiceprint");
  var howItBeatIt_p = document.getElementById("howItBeatIt");


function getComputerChoice() {
  var choices = ["ROCK", "PAPER", "SCISSORS", "BOMB", "GUN"];
  var randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}
function win(computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  outcome_div.innerHTML = ("WINNER WINNER CHICKEN DINNER");
  computer_p.innerHTML = ("COMPUTER CHOOSES " + computerChoice);
  if (userScore === 5) {
    computer_p.innerHTML = ("");
    outcome_div.innerHTML =("YOU REACHED 5 FIRST, WELL DONE!")
  }
}
function lose(computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  outcome_div.innerHTML = ("YOU'RE A BIG LOSER");
  computer_p.innerHTML = ("COMPUTER CHOOSES " + computerChoice);

  if (computerScore === 5) {
  computer_p.innerHTML = ("");
  outcome_div.innerHTML =("THE COMPUTER REACHED 5 FIRST, UNLUCKY!")
  }
}
function draw(computerChoice) {
  outcome_div.innerHTML = ("REALLY? SO MANY OPTIONS AND YOU PICK THE SAME ONE?");
  computer_p.innerHTML = ("COMPUTER CHOOSES " + computerChoice);
}

function game(userChoice) {
  var computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "ROCKSCISSORS":
      howItBeatIt_p.innerHTML ="ROCK BEATS SCISSORS"
      win(computerChoice);
  break;
    case "ROCKGUN":
    howItBeatIt_p.innerHTML="ROCKS SMASH GUNS...EVENTUALLY"
    win(computerChoice);
  break;
    case "PAPERROCK":
      howItBeatIt_p.innerHTML="PAPER HAS ALWAYS WRAPPED ROCK"
      win(computerChoice);
  break;
    case "PAPERGUN":
      howItBeatIt_p.innerHTML="PAPER IS USED TO WRITE GUN LAWS"
      win(computerChoice);
  break;
    case "SCISSORSPAPER":
      howItBeatIt_p.innerHTML="SCISSORS LAUGH AT YOUR THIN PAPER AHAHAHAHA"
      win(computerChoice);
  break;
    case "SCISSORSBOMB":
      howItBeatIt_p.innerHTML="SCISSORS CUT THE BOMBS WIRES...OR IS THAT PLIERS?"
      win();
  break;
    case "GUNBOMB":
      howItBeatIt_p.innerHTML="GUNS BLOW UP BOMBS FROM AFAR"
      win(computerChoice);
  break;
    case "GUNSCISSORS":
      howItBeatIt_p.innerHTML="NEVER BRING SCISSORS TO A GUN FIGHT"
      win(computerChoice);
  break;
    case "BOMBROCK":
      howItBeatIt_p.innerHTML="BOMBS BLOW ROCKS TO SMITHEREENS"
      win(computerChoice);
  break;
    case "BOMBPAPER":
      howItBeatIt_p.innerHTML="BOMBS MAKE PAPER BURN BABY BURN!"
      win(computerChoice);
      break;


    case "SCISSORSROCK":
    howItBeatIt_p.innerHTML ="ROCK WILL ALWAYS BEAT SCISSORS"
    lose(computerChoice);
      break;
    case "SCISSORSGUN":
    howItBeatIt_p.innerHTML="NEVER BRING SCISSORS TO A GUN FIGHT"
    lose(computerChoice);
      break;
    case "ROCKBOMB":
    howItBeatIt_p.innerHTML="BOMBS BLOW ROCKS TO SMITHEREENS"
    lose(computerChoice);
      break;
    case "ROCKPAPER":
    howItBeatIt_p.innerHTML="PAPER HAS ALWAYS WRAPPED ROCK"
    lose(computerChoice);
      break;
    case "PAPERSCISSORS":
    howItBeatIt_p.innerHTML="SCISSORS LAUGH AT YOUR THIN PAPER AHAHAHAHA"
    lose(computerChoice);
      break;
    case "PAPERBOMB":
    howItBeatIt_p.innerHTML="BOMBS MAKE PAPER BURN BABY BURN!"
    lose(computerChoice);
      break;
    case "GUNROCK":
    howItBeatIt_p.innerHTML="ROCKS SMASH GUNS...EVENTUALLY"
    lose(computerChoice);
      break;
    case "GUNPAPER":
    howItBeatIt_p.innerHTML="PAPER'S USED TO WRITE GUN LAWS"
    lose(computerChoice);
      break;
    case "BOMBGUN":
    howItBeatIt_p.innerHTML="GUNS BLOW UP BOMBS FROM AFAR"
    lose(computerChoice);
      break;
    case "BOMBSCISSORS":
    howItBeatIt_p.innerHTML="SCISSORS CUT THE BOMBS WIRES...OR IS THE PLIERS?"
    lose(computerChoice);
    break;

    case "SCISSORSSCISSORS":
    howItBeatIt_p.innerHTML =""
    draw(computerChoice);
      break;
    case "ROCKROCK":
    howItBeatIt_p.innerHTML = ""
    draw(computerChoice);
      break;
    case "PAPERPAPER":
    howItBeatIt_p.innerHTML = ""
    draw(computerChoice);
      break;
    case "GUNGUN":
    howItBeatIt_p.innerHTML = ""
    draw(computerChoice);
      break;
    case "BOMBBOMB":
    howItBeatIt_p.innerHTML = ""
    draw(computerChoice);
      break;
  }
}
game();
function main() {
    rock_div.addEventListener("click", function () {
      game("ROCK");
    });
    paper_div.addEventListener("click", function () {
      game("PAPER");
    });
    scissors_div.addEventListener("click", function () {
    game("SCISSORS");
  });
    bomb_div.addEventListener("click", function () {
      game("BOMB");
    });
    gun_div.addEventListener("click", function () {
      game("GUN");
    });
}
main();
});
