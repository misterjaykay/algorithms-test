// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    var testStr = "";
    var result;
    for (let i = 0; i < str.length; i++) {
        const element = str[i].toLowerCase();
        const opposite = str[str.length - i - 1].toLowerCase();
        testStr += opposite;
    }
    if(testStr === str) {
        return true;
    } else {
        return false;
    }
};


var str = "testing";
isPalindrome(str);

