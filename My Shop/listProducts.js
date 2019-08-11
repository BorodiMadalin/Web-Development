var faker = require('faker');

// var randomProduct = faker.commerce.productName(); 
// var randomPrice = faker.commerce.price(); 
console.log("===================");
console.log("WELCOME TO MY SHOP");
console.log("===================");

for(i=0; i<10; i++){
    console.log("Welcome to my shop");
    console.log(faker.commerce.productName() + " - " + "$" + faker.commerce.price());
}
