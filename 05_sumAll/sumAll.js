const sumAll = function(num1, num2) {
    let sumOfAll = 0;
    let numStart = 0;
    let numEnd = 0;
    
    //checking for user error
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 < 0 || num2 < 0) {
            return "ERROR";
        } else if (num1 > num2) {
            numEnd = num1;
            numStart = num2;
        } else {
            numEnd = num2;
            numStart = num1;
        }
    } else {
        return "ERROR";
    }

    for (let i = numStart; i <= numEnd; i++) {
        sumOfAll += i;
    }
    
    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
