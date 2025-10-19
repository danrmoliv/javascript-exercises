const reverseString = function(string) {
    let stringReversed = ''

    for (i=string.length-1; i>=0 ; i--){
        stringReversed+=string[i];
    }
    console.log(stringReversed);
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
