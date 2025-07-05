// Set a random value between 1 and 6
// Math.random() → gives a random decimal between 0 and <1.

// Math.random() * 6 → gives a decimal between 0 and <6.

// Math.floor(...) → rounds it down to an integer between 0 and 5.

// + 1 → shifts the range to 1 through 6.
let ranNum1 = Math.floor(Math.random() * 6) + 1;
let ranNum2 = Math.floor(Math.random() * 6) + 1;

// Connected the random number to a dice img
let dice1 = "./images/dice" + ranNum1 + ".png";
let dice2 = "./images/dice" + ranNum2 + ".png";

// Update the image
document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);


let winner = document.querySelector("h1");

if (ranNum1 > ranNum2){
    winner.innerHTML = "Player 1 Wins!";
}
else if (ranNum2 > ranNum1){
    winner.innerHTML = "Player 2 Wins!";
}
else {
    winner.innerHTML = "It's A Tie Noone Wins";
}

