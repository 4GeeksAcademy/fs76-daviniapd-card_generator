// function cardGenerator() {
//   console.log("carta aleatoria");
// }

// cardGenerator();
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
  let suits = ["clubs", "diamonds", "hearts", "spades"];

  let randomNumberIndex = Math.floor(Math.random() * numbers.length);
  let randomSuitIndex = Math.floor(Math.random() * suits.length);

  let randomNumber = numbers[randomNumberIndex];
  let randomSuit = suits[randomSuitIndex];

  console.log(`Your card is ${randomNumber} of ${randomSuit}`);
}

cardGenerator();
