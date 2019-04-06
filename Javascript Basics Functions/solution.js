//Version 1 return even = true and odd = false 
function isEven(x) {
   if (x % 2 === 0) {
       return "true";
   } 
   return "false";
}
isEven(4);//true

//Version 2 return even = true and odd = false
function isEven(x) {
    return x % 2 === 0;
}

//Version 1 factorial
function factorial(n) {
    if (n < 0) {
        return -1;
    }
    else if (n === 0) {
        return 1;
    }
    else {
        return (n * factorial(n - 1));
    }
}
factorial(3);//6=3 x 2 x 1;

//Version 2 Factorial
function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i=2; i<=num; i++) {
        result *= i;
    }
    //return the result variable
    return result;
}

//kebabToSnake ("-" to "_")
function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
}
kebabToSnake("hello-world");//"hello_world"