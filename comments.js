// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const comments = [];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(req.body);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});