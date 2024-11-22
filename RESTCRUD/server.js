const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

// In-memory data store
const todos = [];

// Middleware
app.use(express.static(path.join(__dirname, 'public')));   

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API Endpoints
app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        text: req.body.text
    };
    todos.push(newTodo);
    res.json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.text = req.body.text;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos.splice(todos.findIndex(todo => todo.id === id), 1);
    res.json({ message: 'Todo deleted' });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});