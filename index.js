function roll() {
//Dice 1

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - dice6

  var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// Dice 2

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

//If Player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) { //Player 2 Wins
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆";
  }
  else { //Draw
    document.querySelector("h1").textContent = "Draw!";
  }

}
