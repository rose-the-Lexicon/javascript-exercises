const reverseString = function(word) {
    if (word === "") {
        return "";
    } else {
        let wordArray = word.split("");
        let reversedWord = wordArray.reverse();

        return reversedWord.join("");
    }
};

// Do not edit below this line
module.exports = reverseString;
