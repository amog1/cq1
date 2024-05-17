// event listner
document.getElementById("markquiz").addEventListener("click", mark);

// html variavles
let queOne = +document.getElementById("king");
queOne.toLowerCase();
let queTwo = +document.getElementById("queen");
let queThree = +document.getElementById("squares");
let queFour = +document.getElementById("any");
let anwOne = document.getElementById("one");
let anwTwo = document.getElementById("two");
let anwThree = document.getElementById("three");
let anwFour = document.getElementById("four");

// function
function mark() {
  if (
    queOne == "king" ||
    queTwo == "queen" ||
    queThree == 64 ||
    queFour == "queen" ||
    queFour == "bishop" ||
    queFour == "rook" ||
    queFour == "knight"
  ) {
    anwOne.innerHTML = "correct";
    anwTwo.innerHTML = "correct";
    anwThree.innerHTML = "correct";
    anwFour.innerHTML = "correct";
  } else {
    anwOne.innerHTML = "incorrect";
    anwTwo.innerHTML = "incorrect";
    anwThree.innerHTML = "incorrect";
    anwFour.innerHTML = "incorrect";
  }
}
