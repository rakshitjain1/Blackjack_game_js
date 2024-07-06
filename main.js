let player = {
  name: "Rakshit",
  chips: "145",
};

let cards = [];
let sum = 0;
let hasbalck = false;
let isAlive = false;
let message = "";
let messageel = document.getElementById("message-el");
let cardsel = document.getElementById("card-el");
// let sumel=document.getElementBy Id("sum-el")
let sumel = document.querySelector("#sum-el");
let playerel = document.getElementById("player-el");

playerel.textContent = player.name + ": $ " + player.chips;

function startgame() {
  isAlive = true;
  let firstcard = getrandomcard();
  let seccard = getrandomcard();
  cards = [firstcard, seccard];
  sum = firstcard + seccard;
  rendergame();
}
function rendergame() {
  cardsel.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsel.textContent += cards[i] + " ";
  }

  sumel.textContent = "Sum:" + sum;

  if (sum <= 20) {
    message = "Do you Want to Draw New Card? ";
  } else if (sum === 21) {
    message = "WInner you have get  black jack";
    hasbalck = true;
  } else {
    message = "lose the game ";
    isAlive = false;
  }
  messageel.textContent = message;
}

function newcard() {
  if (isAlive === true && hasbalck === false) {
    let card1 = getrandomcard();
    sum += card1;
    cards.push(card1);
    rendergame();
  }
}

function getrandomcard() {
  let r = Math.floor(Math.random() * 13) + 1;

  if (r > 10) {
    return 10;
  } else if (r === 1) {
    return 11;
  } else {
    return r;
  }
}
