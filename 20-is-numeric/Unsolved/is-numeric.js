// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
    var numb = [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ,"0" ];

    var hasNum = false;
    var hasDecimal = false;

    for (let i = 0; i < str.length; i++) {
        const e = str[i];

        if (numb.includes(e)) {
            hasNum = true;
            continue;
        } 

        if (i === 0) {
            if (e === "-" || e ==="+") {
                continue;
            }
        }

        if (e === ".") {
            if (hasDecimal === true) {
                return false;
            }
            hasDecimal = true;
            continue;
        }

        return false;
    }

    if (hasNum) {
        return true;
    }

    return false;
    // if (Number.isInteger(numb)) {
    //     console.log(true);
    //     return true;
    // } else {
    //     console.log(false);
    //     return false;
    // }
};

// var str = "-0123.00";
var str = "55-";

isNumeric(str);