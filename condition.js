var age=prompt("How old are you?")
if (age < 0) {
    alert("Your age is not correct")
}
if (age === 21) {
    console.log("Happy 21st Birthday!")
}
// if (age === "odd") {
// alert("Your age is odd!")
// }
if(age % 2 !== 0) {
    console.log("Your age is odd!");
   }
if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
  }   