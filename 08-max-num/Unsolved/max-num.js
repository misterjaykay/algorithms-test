// Write code to return the largest number in the given array

var maxNum = function (arr) {
  var prev = 0;
  for (let i = 0; i < arr.length; i++) {
    var element = arr[i];

    if (element > prev) {
      prev = element;
    } else {
      prev = prev;
    }
  }
  return prev;
};

var arr = [2, 3, -2, 99, 100, 2222, 321];
// var arr = [3, 1, 17, 5, 6];
maxNum(arr);
