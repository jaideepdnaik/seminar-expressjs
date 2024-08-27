const express = require('express');
const app = express();

const PORT = 3000; // OR 8080

app.listen(PORT, () => {
    console.log(`Server is Listening on port http://localhost:${PORT}`);
});

//GET Request
app.get('/', (req, res) => {
    res.send('You\'ve reached the root path');
});

app.get('/home', (req, res) => {
    res.send('You\'ve reached the home page');
});

app.get('/help', (req, res) => {
    res.send('You\'ve reached the help page');
});

//Wild card route.
app.get('*', (req, res) => {
    res.send('This path doesn\'t exist.');
});

//POST request
app.post('/', (req, res) => {
    res.send('You\'ve reached the root path by sending a POST request. ');
});

