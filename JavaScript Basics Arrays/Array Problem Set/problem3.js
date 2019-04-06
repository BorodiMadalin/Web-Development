function sumArray(arr) {
    var total=0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}
console.log(sumArray([1, 3, 7])); // 11