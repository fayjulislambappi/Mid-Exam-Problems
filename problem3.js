const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countVowels(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    const vowels = "aeiou";
    let vowelCount = 0;

    for (const char of lowerCaseString) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

rl.question("Enter a string: ", function(userInput) {
  const vowelCount = countVowels(userInput);
  console.log("Number of vowels:", vowelCount);
  rl.close();
});
