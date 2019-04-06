var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =  document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //another way to writing the above if statement
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;//if this.textContent is = to easy then number of squares = 3 else numberofsquares = 6
            reset();
            // if( this.textContent ==="Easy") {
            //     numberOfSquares = 3;
            // } else {
            //     numberOfSquares = 6;
            // }
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "black";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset() {
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of square
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click",function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numberOfSquares = 3;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i=0; i < squares.length; i++){
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numberOfSquares = 6;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//         }
// });


resetButton.addEventListener("click",function() {
    // //generate all new colors
    // colors = generateRandomColors(numberOfSquares);
    // //pick a new random color from array
    // pickedColor = pickColor();
    // //change colorDusplay to match picked color
    // colorDisplay.textContent = pickedColor;
    // this.textContent = "New Colors";
    // messageDisplay.textContent = [];
    // //change colors of square
    // for (var i=0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
    reset();
});

colorDisplay.textContent = pickedColor;



function changeColors() {
    //loop thorugh al squares
    for (var i = 0; i < squares.length; i++){
    //change exach color to match given color
    squares[i].style.backgroundColor = pickedColor;
    }
}
    
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i=0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    } 
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red"from 0=255
    var r = Math.floor(Math.random() * 256);
    //pick a "green"to 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue"to 0-255
    var b = Math.floor(Math.random() * 256);
    //"rgb(r,g,b)"
    //return that array
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
    
