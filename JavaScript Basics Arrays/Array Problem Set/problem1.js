function printReverse(arr) {
    for (var i = arr.length - 1;i >= 0; i--){ //arr.length - 1 because the actual length is always greater with 1 that the index length
        console.log(arr[i]);
    }
}
 printReverse([3,4,5,1]); 