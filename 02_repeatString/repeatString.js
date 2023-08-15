const repeatString = function(word, repeatLimit) {
    let repeatedStr = ""
    
    if (repeatLimit >= 0) {
        for (let i = 0; i < repeatLimit; i++){
            repeatedStr = repeatedStr.concat(word);
        }
        return repeatedStr;
    
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
