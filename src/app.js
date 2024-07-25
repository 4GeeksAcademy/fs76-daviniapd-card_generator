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
  document.getElementById("suitCardTop").innerHTML = randomSuit;
  document.getElementById("suitCardTop").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitCardBottom").innerHTML = randomSuit;
  document.getElementById("suitCardBottom").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";

  // eslint-disable-next-line no-console
  console.log(`Your card is ${randomNumber} of ${randomSuit}`);
}
