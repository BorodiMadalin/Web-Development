
//Version 1 (the long one)
// var body = document.querySelector("body");
// var button = document.querySelector("button");

// var isPurple = false;
// button.addEventListener("click", function() {
// if (isPurple) {
//     body.style.background = "white";
// } else {
//     body.style.background = "purple";
// }
// isPurple = !isPurple;// !purple = is not purple
// })


//Version 2 (the short one)
var body = document.querySelector("body");
var button = document.querySelector("button");

button.addEventListener("click", function () {
   body.classList.toggle("purple");//toggle = checks if class purple is added and if not it will added it and then after is added checks and see the class is added and remove it and so on
})
