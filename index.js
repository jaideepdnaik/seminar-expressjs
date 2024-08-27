const express = require('express');
const app = express();

const PORT = 3000; // OR 8080

app.listen(PORT, () => {
    console.log(`Server is Listening on port http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('You\'ve reached the root path');
});

app.get('/home', (req, res) => {
    res.send('You\'ve reached the home page');
});

app.get('/help', (req, res) => {
    res.send('You\'ve reached the help page');
});