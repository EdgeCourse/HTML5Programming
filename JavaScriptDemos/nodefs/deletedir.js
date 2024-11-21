const fs = require('fs');

fs.rmdir('new_directory', { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Directory deleted successfully');
  }
});