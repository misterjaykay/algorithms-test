// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    var element = str[i].toLowerCase();

    if (element === "a") {
      count++;
    } else if (element === "e") {
      count++;
    } else if (element === "i") {
      count++;
    } else if (element === "o") {
      count++;
    } else if (element === "u") {
      count++;
    } else {
      count;
    }
  }
  console.log(count);
  return count;
};

var str = "This is a test string, please succeed.";
vowelCount(str);
