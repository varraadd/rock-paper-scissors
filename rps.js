let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = ()=> {
    const compChoice = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return compChoice[randomNum];
};

const drawGame = () => {
    console.log("It's a draw");
    msg.innerText = "It's a draw. Play Again";
    msg.style.backgroundColor = "#FCF3CF";
}

const showWinner = (userWin) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("YOU WIN");
        msg.innerText = "YOU WIN";
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("YOU LOSE");
        msg.innerText = "YOU LOSE";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice-", userChoice);

    //get comp choice
    const compChoice = genCompChoice();
    console.log("comp choice-", compChoice);

    if(userChoice === compChoice){
        //draw
        console.log("It's a draw");
        drawGame();

    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
                userWin = compChoice === "paper" ? false : true;

            } else if (userChoice === "paper"){
                //rock, scissors
                userWin = compChoice === "scissors" ? false : true ;
                
            } else {
                //rock, paper
                userWin = compChoice === "rock" ? false : true ;
            }
            showWinner (userWin);
    }
}


choices.forEach((choice) => {
    console.log(choice)

    choice.addEventListener("click",() => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});


//Score_Card