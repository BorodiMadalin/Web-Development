// create secretNumber
var secretNumber=4;
//ask user for guess
var guess=prompt("Guess the number");

while (guess !== secretNumber) {
//check if guess is right
if (guess === secretNumber) {
alert("You guessed the number!");
}
else if (guess > secretNumber) {
alert("You are too high!");
}
else  {
alert("You are too low!");
}
guess = prompt("Guess the number");
}
console.log("You guessed the number!");
