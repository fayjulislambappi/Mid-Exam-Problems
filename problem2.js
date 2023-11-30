const readline = require('readline');

function countWords(inputString) {
    if (!inputString.trim()) {
        return 0;
    }
    const words = inputString.split(/\s+/);
    return words.length;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a String: ', (userInput) => {
    const wordCount = countWords(userInput);
    console.log('Word Number:', wordCount);
    rl.close();
});
