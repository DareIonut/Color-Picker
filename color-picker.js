const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("color-display");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const counter = document.querySelector(".counter");
const resetButton = document.querySelector("#reset");
const easyMode = document.querySelector("#easy");
const hardMode = document.querySelector("#hard");

let colors = generateRandomColors(6);
let pickedColor = pickColor();

resetButton.addEventListener("click", function () {
  displayAgain();
  colors = generateRandomColors(6);
  loopThroughSquares();
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  h1.style.background = "steelblue";
  removeAddFocus();
  this.textContent = "New Game!";
});

hardMode.addEventListener("click", function () {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  h1.style.background = "steelblue";
  removeAddFocus();
  displayAgain();
  loopThroughSquares();
});

easyMode.addEventListener("click", function () {
  removeAddFocus();
  h1.style.background = "steelblue";
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 3; i < 6; i++) {
    document.querySelectorAll(".square")[i].style.display = "none";
  }
  loopThroughSquares();
});

function removeAddFocus() {
  easy.classList.remove("selected");
  hard.classList.add("selected");
}

function loopThroughSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Good!";
        resetButton.textContent = "Play Again";
        h1.style.background = clickedColor;
        changeColors(clickedColor);
      } else {
        messageDisplay.textContent = "Bad!";
        squares[i].style.background = "#232323";
      }
    });
  }
}

function changeColors(colorChange) {
  for (let i = 0; i <= squares.length; i++) {
    squares[i].style.background = colorChange;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (let i = 1; i <= num; i++) {
    arr.unshift(randomColor());
  }
  return arr;
}

function randomColor() {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  return "rgb(" + a + ", " + b + ", " + c + ")";
}

function displayAgain() {
  for (let i = 3; i < 6; i++) {
    document.querySelectorAll(".square")[i].style.display = "block";
  }
}

let counterX = 10;

for (let i = 0; i <= counterX; i++) {
  console.log(i);
  counterX = 80;
}
