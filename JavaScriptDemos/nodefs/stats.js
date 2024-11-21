const fs = require('fs');

fs.writeFile('newFile.txt', 'Hello, world!', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File written successfully');
  }
});

/*
The Stats object provides various other properties, such as:
isFile(): Checks if the file is a regular file.
isDirectory(): Checks if the file is a directory.
mtime: Modification time.
ctime: Creation time.
birthtime: Birth time (platform-specific).
*/