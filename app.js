const game = () => {
let pScore =0;
let cScore=0;
const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    
    playBtn.addEventListener('click',()=>{
        introScreen.classList.remove("fadeIn");
        introScreen.classList.add("fadeOut");
        match.classList.remove("fadeOut");
        match.classList.add("fadeIn");
    })
};

const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const computerOptions = ['rock','paper','scissors'];
    const hands = document.querySelectorAll('.hands img');
    hands.forEach(hand=>{
        hand.addEventListener('animationend',function(){
            this.style.animation='';
        })
    })
    options.forEach((option) => {
        option.addEventListener('click', function(){
            const computerNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[computerNumber];
            const playerChoice = this.textContent;
            setTimeout(()=>{
                compareHands(playerChoice,computerChoice);
                playerHand.src=`./assets/${this.textContent}.png`;
                computerHand.src=`./assets/${computerChoice}.png`;
    
            },2000)
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";

        })
    })
   }
   const updateScore = () => {
    const playerScore  = document.querySelector('.player-score p');
    const computerScore  = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

   }
   const compareHands = (playerChoice,computerChoice) => {
    const winner = document.querySelector('.winner');   
    if(playerChoice === computerChoice){
        winner.textContent="its a tie";
        return;
    }
    if(playerChoice==='rock'){
        if(computerChoice==='scissors'){
            winner.textContent="player Wins";
            pScore++;
            updateScore();
            return; 
        }else{
            winner.textContent="computer Wins";
            cScore++;
            updateScore();
            return; 
        }

    }
    if(playerChoice==='paper'){
        if(computerChoice==='scissors'){
            winner.textContent="computer Wins";
            cScore++;
            updateScore();
            return; 
        }else{
            winner.textContent="player Wins";
            pScore++;
            updateScore();
            return; 
        }
    }
    if(playerChoice==='scissors'){
        if(computerChoice==='rock'){
            winner.textContent="computer Wins";
            cScore++;
            updateScore();
            return; 
        }else{
            winner.textContent="player Wins";
            pScore++;
            updateScore();
            return; 
        }
    }
   }
   const endGame = () => {
       const endGameBtn = document.querySelector('.endGame button');
       const resultBox = document.querySelector('.gameResults');
        endGameBtn.addEventListener('click',function(){
            setTimeout(()=>{
                match.classList.remove("fadeIn");
                match.classList.add("fadeOut");
                introScreen.classList.remove("fadeOut");
                introScreen.classList.add("fadeIn");
            },2000)
       const result = cScore>pScore?'Computer Won the Game':'You won the Game';
        resultBox.textContent=result;

       })
   }
startGame();
playMatch();
endGame();
}
game();