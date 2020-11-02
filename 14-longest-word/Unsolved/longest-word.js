// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    var arr = str.split(" ");
    var long = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        if (element.length > long.length) {
            long = element;
        }
        console.log(long);
    }
    return long;
};

var str = "i love programming too";

longestWord(str);
