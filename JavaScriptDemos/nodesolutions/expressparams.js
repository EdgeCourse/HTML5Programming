const express = require('express');

const app = express();

// Handle query string parameters
app.get('/greet', (req, res) => {
  const name = req.query.name;
  const message = name ? `Hello, ${name}!` : 'Hello, world!';
  res.send(message);
});

// Handle path parameters
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const message = `User ID: ${userId}`;
  res.send(message);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});