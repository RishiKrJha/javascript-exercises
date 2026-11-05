const removeFromArray = function(arr) {
    for (let i = 1; i < arguments.length; i++) {
        const value = arguments[i];
        let index = arr.indexOf(value);
        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(value);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
