// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
    var empty = [];
    var data = str.split("");
    for (let i = 0; i < data.length; i++) {
        var element = data[i];
        console.log("ele", element);
        if (element === element.toLowerCase()) {
            element = element.toUpperCase();
        } else if (element === element.toUpperCase()) {
            element = element.toLowerCase();
        } else {
            return;
        }
        console.log("change", element);
        // var word = element.join("");
        empty.push(element);
    }
    var newArr = empty.join("");
    console.log(empty);
    console.log(newArr);
    return newArr;
};

var str = "Luke, I Am Your Father";

swapCase(str);
