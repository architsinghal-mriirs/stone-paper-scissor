//Selectors
const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

const computerChoiceGenerate = (e) => {
  result.innerText = "";
  inlineDisplayer();
  let pChoice = e.target.value;
  const choice = ["stone", "paper", "scissor"];
  let index = Math.floor(Math.random() * 3);
  let cChoice = choice[index];
  playerChoice.innerText = pChoice;
  computerChoice.innerText = cChoice;
  resultCalculator(pChoice, cChoice);
};

const inlineDisplayer = () => {
  playerChoice.style.display = "inline";
  computerChoice.style.display = "inline";
  result.style.display = "inline";
};

const resultCalculator = (pChoice, cChoice) => {
  if (pChoice === cChoice) {
    result.innerText = "Draw";
    return;
  }
  if (pChoice === "stone") {
    if (cChoice === "paper") {
      result.innerText = "Computer Wins!";
    } else {
      result.innerText = "You Win !";
    }
  }
  if (pChoice === "paper") {
    if (cChoice === "scissor") {
      result.innerText = "Computer Wins!";
    } else {
      result.innerText = "You Win !";
    }
  }
  if (pChoice === "scissor") {
    if (cChoice === "stone") {
      result.innerText = "Computer Wins!";
    } else {
      result.innerText = "You Win !";
    }
  }
};

//Event Listeners
stone.addEventListener("click", computerChoiceGenerate);
paper.addEventListener("click", computerChoiceGenerate);
scissor.addEventListener("click", computerChoiceGenerate);
