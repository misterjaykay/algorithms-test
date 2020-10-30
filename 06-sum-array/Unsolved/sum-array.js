// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

var arr = [4, 8, 15, 16, 23, 42];
sumArray(arr);