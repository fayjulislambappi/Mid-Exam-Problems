const readline = require('readline');

function removeSpecificCharacters(inputString) {
    var resultString = inputString.replace(/[acz]/g, '');
    return resultString;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function(userInput) {
    var modifiedString = removeSpecificCharacters(userInput);
    console.log("Modified String:", modifiedString);
    rl.close();
});

