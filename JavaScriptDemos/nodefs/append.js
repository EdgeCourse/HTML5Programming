const fs = require('fs');

fs.appendFile('info.txt', '\nThis is a new line.', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File appended successfully');
  }
});