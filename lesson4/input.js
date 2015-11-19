var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What is your name? ", function(theName) {
  console.log("Hi there: ", theName);
  console.log("You smell: ", theName);
  console.log("Go away: ", theName);
  rl.close();
});
