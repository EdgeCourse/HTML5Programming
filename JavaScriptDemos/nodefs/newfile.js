const fs = require('fs');

fs.appendFile('myFile.txt', '\nThis is a new line.', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File appended successfully');
  }
});