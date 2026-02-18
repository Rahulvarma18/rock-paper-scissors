let humanScore=0;
let ComputerScore=0;
const maxRounds = 5;
let rounds = 0;
document.getElementById("rock").addEventListener("click",function(){
    playGame("Rock");
});
document.getElementById("paper").addEventListener("click",function(){
    playGame("Paper");
});
document.getElementById("scissors").addEventListener("click",function(){
    playGame("Scissors");
});
// console.log(playGame());
function playGame(choice){
    document.getElementById("winner").innerText = "";
    document.getElementById("finalResult").innerText="";
        rounds++;
        const humanSelection = choice;
        const computerSelection = getComputerChoice();
       document.getElementById("round").innerText = "Round :" +rounds;
         document.getElementById("choices").innerText = "You chose: " + humanSelection + "  Computer chose: " + computerSelection;
        playRound(humanSelection,computerSelection);
        if(rounds === maxRounds){
            calculateScore(humanScore,ComputerScore);
           resetGame();
        }
    }
function resetGame(){  
    rounds = 0;
    humanScore = 0;
    ComputerScore = 0;
    document.getElementById("round").innerText = "Round: 0";
    document.getElementById("score").innerText = "";
    document.getElementById("choiceDisplay").innerText = "";
}
function calculateScore(humanScore,ComputerScore){
    let result ="";
     if(humanScore>ComputerScore){
        result = "You won!";
    }else if(humanScore<ComputerScore){
        result = "Computer won! ";
    }else{
       result = "It's a Tie! ";
    }
    document.getElementById("finalResult").innerText = "Your Score: "+ humanScore+ "  Computer Score: "+ComputerScore;
    document.getElementById("winner").innerText = result;
    humanScore=0;ComputerScore=0;
}
function getComputerChoice(){
     let cnt=Math.floor(Math.random()*3);
     if(cnt==0) {
        return "Rock";
     }else if(cnt==1){
        return "Paper";
     }else{
        return "Scissors"
     }
}

function playRound(humanChoice, computerChoice) {
 if (humanChoice===computerChoice) {
    // console.log("It's a tie!");
  } else if (
    (humanChoice==="Rock" && computerChoice==="Scissors") ||
    (humanChoice==="Paper" && computerChoice==="Rock") ||
    (humanChoice==="Scissors" && computerChoice==="Paper")
  ) {
    
    humanScore++;
  } else {
   
    ComputerScore++;
  }

}


