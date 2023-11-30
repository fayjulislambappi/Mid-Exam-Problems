const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateRequiredRunRate(currentRun, requiredRun, remainingOvers) {
  if (remainingOvers !== 0) {
    const requiredRunRate = requiredRun / (remainingOvers * 6) * 6;
    return requiredRunRate.toFixed(2);
  } else {
    return "Infinity";
  }
}

rl.question("Enter current run: ", (currentRun) => {
  rl.question("Enter required run: ", (requiredRun) => {
    rl.question("Enter remaining overs: ", (remainingOvers) => {

      currentRun = parseFloat(currentRun);
      requiredRun = parseFloat(requiredRun);
      remainingOvers = parseFloat(remainingOvers);

      const requiredRunRate = calculateRequiredRunRate(currentRun, requiredRun, remainingOvers);
      console.log("Required Run Rate:", requiredRunRate);
      rl.close();
    });
  });
});
