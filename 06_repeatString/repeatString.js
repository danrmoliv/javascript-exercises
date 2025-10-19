const repeatString = function(string, num) {
    let newString = ''
    if (num >= 0) {
        for (i=1; i<= num; i++){
            newString+=string;
        };
        console.log(newString);
        return newString
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
