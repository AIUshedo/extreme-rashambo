$(document).ready(function(){
  var backgroundmusic = new Audio("rude-buster.mp3");
  var bombSFX = new Audio("bomb-sfx.mp3");
  var gunSFX = new Audio("gun-sfx.mp3");
  var unlucky = new Audio("unlucky.mp3");
  var yes = new Audio("yes.mp3");
  var paper = new Audio("paper.mp3");
  var scissors = new Audio("scissors.mp3");
  var rock = new Audio("rock.mp3");
  var heartbeak = new Audio("heartbeat.mp3");
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
  var userImage = document.getElementById("userImage");
  var compImage = document.getElementById("computerImage");

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
    yes.play();
    computer_p.innerHTML = ("");
    outcome_div.innerHTML =("YOU REACHED 5 FIRST, WELL DONE!")
     document.getElementByClassName("choices").disabled = true;
  }
}

function lose(computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  outcome_div.innerHTML = ("YOU'RE A BIG LOSER");
  computer_p.innerHTML = ("COMPUTER CHOOSES " + computerChoice);
  if (computerScore === 5) {
    unlucky.play();
  computer_p.innerHTML = ("");
  outcome_div.innerHTML =("THE COMPUTER REACHED 5 FIRST, UNLUCKY!");
   document.getElementByClassName("choices").disabled = true;
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
    if (userScore != 4) {
    rock.play();
    }
      howItBeatIt_p.innerHTML ="ROCK BEATS SCISSORS"
      win(computerChoice);
  break;

    case "ROCKGUN":
    if (userScore != 4) {
    rock.play();
    }
    howItBeatIt_p.innerHTML="ROCKS SMASH GUNS...EVENTUALLY"
    win(computerChoice);
  break;

    case "PAPERROCK":
    if (userScore != 4) {
      paper.play();
    }
      howItBeatIt_p.innerHTML="PAPER HAS ALWAYS WRAPPED ROCK"
      win(computerChoice);
  break;

    case "PAPERGUN":
    if (userScore != 4) {
      paper.play();
    }
      howItBeatIt_p.innerHTML="PAPER IS USED TO WRITE GUN LAWS"
      win(computerChoice);
  break;

    case "SCISSORSPAPER":
    if (userScore != 4) {
      scissors.play();
    }
      howItBeatIt_p.innerHTML="SCISSORS LAUGH AT YOUR THIN PAPER AHAHAHAHA"
      win(computerChoice);
  break;

    case "SCISSORSBOMB":
    if (userScore != 4) {
      scissors.play();
    }
      howItBeatIt_p.innerHTML="SCISSORS CUT THE BOMBS WIRES...OR IS THAT PLIERS?"
      win(computerChoice);
  break;

    case "GUNBOMB":
      if (userScore !=4) {
          gunSFX.play();
      }
      howItBeatIt_p.innerHTML="GUNS BLOW UP BOMBS FROM AFAR"
      win(computerChoice);
  break;

    case "GUNSCISSORS":
    if (userScore != 4) {
      gunSFX.play();
    }
      howItBeatIt_p.innerHTML="NEVER BRING SCISSORS TO A GUN FIGHT"
      win(computerChoice);
  break;

    case "BOMBROCK":
    if (userScore != 4) {
      bombSFX.play();
    }
      howItBeatIt_p.innerHTML="BOMBS BLOW ROCKS TO SMITHEREENS"
      win(computerChoice);
  break;

    case "BOMBPAPER":
    if (userScore != 4) {
      bombSFX.play();
    }
      howItBeatIt_p.innerHTML="BOMBS MAKE PAPER BURN BABY BURN!"
      win(computerChoice);
      break;

//win conditions end here

    case "SCISSORSROCK":
    if (computerScore != 4) {
      scissors.play();
    }
    howItBeatIt_p.innerHTML ="ROCK WILL ALWAYS BEAT SCISSORS"
    lose(computerChoice);
      break;

    case "SCISSORSGUN":
    if (computerScore != 4) {
      scissors.play();
    }
    howItBeatIt_p.innerHTML="NEVER BRING SCISSORS TO A GUN FIGHT"
    lose(computerChoice);
      break;

    case "ROCKBOMB":
    if (computerScore != 4) {
      rock.play();
    }
    howItBeatIt_p.innerHTML="BOMBS BLOW ROCKS TO SMITHEREENS"
    lose(computerChoice);
      break;

    case "ROCKPAPER":
    if (computerScore != 4) {
      rock.play();
    }
    howItBeatIt_p.innerHTML="PAPER HAS ALWAYS WRAPPED ROCK"
    lose(computerChoice);
      break;
    case "PAPERSCISSORS":
    if (computerScore != 4) {
      paper.play();
    }
    howItBeatIt_p.innerHTML="SCISSORS LAUGH AT YOUR THIN PAPER AHAHAHAHA"
    lose(computerChoice);
      break;

    case "PAPERBOMB":
    if (computerScore != 4) {
      paper.play();
    }
    howItBeatIt_p.innerHTML="BOMBS MAKE PAPER BURN BABY BURN!"
    lose(computerChoice);
      break;

    case "GUNROCK":
    if (computerScore != 4) {
      gunSFX.play();
    }
    howItBeatIt_p.innerHTML="ROCKS SMASH GUNS...EVENTUALLY"
    lose(computerChoice);
      break;

    case "GUNPAPER":
    if (computerScore != 4) {
      gunSFX.play();
    }
    howItBeatIt_p.innerHTML="PAPER'S USED TO WRITE GUN LAWS"
    lose(computerChoice);
      break;

    case "BOMBGUN":
    if (computerScore != 4) {
      bombSFX.play();
    }
    howItBeatIt_p.innerHTML="GUNS BLOW UP BOMBS FROM AFAR"
    lose(computerChoice);
      break;

    case "BOMBSCISSORS":
    if (computerScore != 4) {
      bombSFX.play();
    }
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
    backgroundmusic.play();
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
