// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
    var arr = str.split(" ");
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // console.log(element);
        // console.log(i);
        newArr.unshift(element);
        console.log(newArr);
    }
    var newStr = newArr.join(" ");
    console.log(newStr)
    return newStr;
};

var str = "just keep playing hard";

reverseWords(str);
