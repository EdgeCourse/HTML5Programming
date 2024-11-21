const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('myFile.txt')
});

rl.on('line', (line) => {
  console.log(line);
});