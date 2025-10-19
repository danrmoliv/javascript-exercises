const removeFromArray = function(arr, ...items) {
    let newArray = [];

    for (i = 0; i < arr.length; i++) {

        if (!items.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
