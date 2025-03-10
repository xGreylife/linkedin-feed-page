const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const { loggedInUser, users } = require('./data/userData');
const { postList } = require('./data/postData');

//middleware
app.use(cors());
app.use(express.json());

//endpoints
app.get('/api/user', (req, res) => {
    res.json(loggedInUser);
});

app.get('/api/posts', (req, res) => {
    res.json(postList);
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});