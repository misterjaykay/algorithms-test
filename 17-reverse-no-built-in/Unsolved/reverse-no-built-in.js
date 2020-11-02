// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

// var reverse = function(str) {
//     var newStr = [];
//     var res = str.split(" ").reverse();
//     for (let i = 0; i < res.length; i++) {
//         var element = res[i];
//         // console.log(element);
//         element = element.split("").reverse();
//         // console.log(element);
//         var newElement = element.join("");
//         console.log(newElement);
//         newStr.push(newElement);
//     }
//     return newStr.join(" ");
// };

var reverse = function(str) {
    var result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        var letter = str[i];
        result += letter;
    }
    console.log(result);
    return result;
}

var str = "just keep playing hard";

reverse(str);
