const fs = require('fs');

fs.stat('your_file.txt', (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    const fileSizeInBytes = stats.size;
    console.log(`File size: ${fileSizeInBytes} bytes`);
  }
});