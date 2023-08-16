const removeFromArray = function(arrayToEdit, ...argumentsRemoved) {
    for (const arg of argumentsRemoved) {
        if (arrayToEdit.includes(arg)) {
            let index = arrayToEdit.indexOf(arg);
            arrayToEdit.splice(index, 1);
        } else {
            continue;
        }
    }
    return arrayToEdit;
};

// Do not edit below this line
module.exports = removeFromArray;
