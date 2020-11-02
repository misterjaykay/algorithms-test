// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    var split = str.split(" ");
    var acro = "";
    for (let i = 0; i < split.length; i++) {
        const element = split[i];
        console.log(element);
        acro += element.charAt(0).toUpperCase();
        console.log(acro);
    }
    return acro;
};

var str = "Too much information";

acronymBuilder(str);
