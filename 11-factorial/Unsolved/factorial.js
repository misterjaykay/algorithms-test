// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    var value = 1;
    for (let i = 0; i < num; i++) {
        console.log(i); // 0, 1, 2 ...
        var numb = i + 1;
        console.log(numb);
        value = value * numb;
    }
    return value;
};

var number = 6;
factorial(number);
