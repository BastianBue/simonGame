function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(6)+1);
}
var randomNumber1 = getRandomInt();
var randomNumber2 =getRandomInt();


function changeTheHeadline(randomNumber1,randomNumber2){
  var headline = document.querySelector("h1");
  if (randomNumber1===randomNumber2){
      headline.textContent="Neither player wins";
  }
 else if (randomNumber1>randomNumber2) {
      headline.textContent="Player 1 wins!";
  }else{
    headline.textContent="Player 2 wins!";
  }
}

function changeTheImages(randomNumber1,randomNumber2){
  var dice1 = document.getElementById("dice1");
  var dice2 = document.getElementById("dice2");
if(randomNumber1===1){
  dice1.src="images/dice1.png";
}else if (randomNumber1===2) {
    dice1.src="images/dice2.png";
}
else if (randomNumber1===3) {
    dice1.src="images/dice3.png";
}
else if (randomNumber1===4) {
    dice1.src="images/dice4.png";

}else if (randomNumber1===5) {
    dice1.src="images/dice5.png";

}else if (randomNumber1===6) {
    dice1.src="images/dice6.png";
}
if(randomNumber2===1){
    dice2.src="images/dice1.png";
}else if (randomNumber2===2) {
    dice2.src="images/dice2.png";
}
else if (randomNumber2===3) {
    dice2.src="images/dice3.png";
}
else if (randomNumber2===4) {
    dice2.src="images/dice4.png";

}else if (randomNumber2===5) {
    dice2.src="images/dice5.png";

}else if (randomNumber===6) {
    dice2.src="images/dice6.png";
}
}




changeTheHeadline(randomNumber1,randomNumber2);
changeTheImages(randomNumber1,randomNumber2);
