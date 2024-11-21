const fs = require('fs');

fs.mkdir('new_directory', (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log('Directory created successfully.');
    process.chdir('new_directory');
    console.log('Current working directory:', process.cwd());
  }
});