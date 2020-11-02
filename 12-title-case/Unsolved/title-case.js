// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    var res = str.split(" ");
    var newRes = [];
    for (let i = 0; i < res.length; i++) {
        var element = res[i].split("");
        
        element[0] = element[0].toUpperCase();
        
        newRes.push(element.join(""));

        console.log(newRes);
    }
    var arr = newRes.join(" ");
    console.log(arr);
    return arr;
};

var str = "a lannister always pays his debts";

titleCase(str);
