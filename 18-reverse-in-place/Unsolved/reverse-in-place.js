// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
    var newArr = [];
    // var str = arr.split("");
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        newArr.unshift(element);
        console.log(newArr);
        
    }
    return newArr;
};

var arr = [2, 4, 6, 8];

reverseInPlace(arr);