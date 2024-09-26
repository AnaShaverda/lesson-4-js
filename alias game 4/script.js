const words = [
  "სიყვარული",
  "მეგობრობა",
  "გართობა",
  "ბავშვობა",
  "მთვარე",
  "ცხოვრება",
  "გზა",
  "ქარი",
  "სიმართლე",
  "გული",
  "სათამაშო",
  "სახლი",
  "ცხოველი",
  "ყვავილი",
  "ზღვა",
  "თამაში",
  "მზე",
  "წვიმა",
  "ტყე",
  "პური",
  "გონება",
  "ტბა",
  "გემო",
  "ფერი",
  "მეტრო",
  "ხელოვნება",
  "ხე",
  "წყალი",
  "ღამე",
  "მოგზაურობა",
  "ხილვა",
  "რესტორანი",
  "სკოლა",
  "ვარსკვლავი",
  "ფანჯარა",
  "ჭურჭელი",
  "ქარი",
  "ტალღა",
  "მატარებელი",
  "ქალაქი",
  "შეყვარებული",
  "მუსიკა",
  "ფიქრი",
  "სახლი",
  "სარკე",
  "ფოტო",
  "ვინილი",
  "წიგნი",
  "გზა",
  "სადგური",
];

const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const score = document.getElementById("score");
const finalScore = document.getElementById("finalScore");
let count = 0;

const genenerateRandomNumber = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return randomNumber;
};

const displayWords = () => {
  let randomWord = genenerateRandomNumber(words);
  const word = document.getElementById("word");
  word.textContent = words[randomWord];
};

displayWords();

function displayScore() {
  score.textContent = count;
}
displayScore();

increase.addEventListener("click", () => {
  count++;
  displayScore();
  displayWords();
  finishGame();
});

decrease.addEventListener("click", () => {
  count--;
  displayScore();
  displayWords();
  finishGame();
});

function finishGame() {
  let scoreInt = parseInt(score.textContent);
  if (scoreInt === 8) {
    newGame();
    finalScore.textContent = "you won";
    decrease.disabled = true;
    increase.disabled = true;
  } else if (scoreInt === -5) {
    finalScore.textContent = "game over";
    decrease.disabled = true;
    increase.disabled = true;
    newGame();
  }
}
finishGame();

function newGame() {
  const newGame = document.getElementById("new");
  newGame.classList.add("show");
}

const startGame = document.getElementById("new");

startGame.addEventListener("click", (event) => {
  displayWords();
  count = 0;
  displayScore();
  finalScore.textContent = "";
  decrease.disabled = false;
  increase.disabled = false;
  event.target.classList.remove("show");
});
