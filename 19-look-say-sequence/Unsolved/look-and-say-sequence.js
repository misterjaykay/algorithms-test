// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
    var arr = n.toString();
    var res = "";

    var count = 1;
    var current = arr[0];

    for (let i = 1; i <= arr.length; i++) {
        const element = arr[i];

        console.log("check", current);
        console.log("loop", element);

        if (element === current) {
            count++;
            console.log(element, current);
        } else {
            res += count;
            res += current;
            count = 1;
            current = element;
        }
    }
    console.log(parseInt(res));
    return parseInt(res);
};

var n = 335561;

lookAndSay(n);