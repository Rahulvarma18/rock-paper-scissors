let humanScore=0;
let ComputerScore=0;
console.log(playGame());
function playGame(){
    for(let i=0;i<3;i++){
            const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("You Choosed "+humanSelection ,+" Computer Choosed "+computerSelection);    
//onsole.log("Computer Choosed "+computerSelection);
        playRound(humanSelection,computerSelection);
    }
    if(humanScore>ComputerScore){
        console.log("You won!");
    }else if(humanScore<ComputerScore){
        console.log("Computer won!");
    }else{
        console.log("It's a Tie!");
    }
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
function getHumanChoice(){
    let choice=prompt("Enter Your Choice");
    choice=choice.toLowerCase();
    if(choice=="rock"){
        return "Rock";
    }else if(choice=="paper"){
        return "Paper";
    }else{
        return "Scissors";
    }
}
function playRound(humanChoice, computerChoice) {
 if (humanChoice===computerChoice) {
    //console.log("It's a tie!");
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


