function cardGenerator() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suits = ["♦", "♥", "♠", "♣"];

  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.getElementById("numberCard").innerHTML = randomNumber;
  document.getElementById("suitLeftTop").innerHTML = randomSuit;
  document.getElementById("suitLeftTop").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitRightTop").innerHTML = randomSuit;
  document.getElementById("suitRightTop").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitLeftBottom").innerHTML = randomSuit;
  document.getElementById("suitLeftBottom").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitRightBottom").innerHTML = randomSuit;
  document.getElementById("suitRightBottom").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";

  console.log(`Your card is ${randomNumber} of ${randomSuit}`);
}
