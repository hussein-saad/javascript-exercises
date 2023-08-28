const removeFromArray = function(arr) {
    for (let i = 0; i < arguments.length; i++) {
        let index = arr.indexOf(arguments[i]);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
