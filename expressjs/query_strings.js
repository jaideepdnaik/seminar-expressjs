const express = require('express');
const app = express();

const PORT = 3002; // OR 8080

app.listen(PORT, () => {
    console.log(`Server is Listening on port http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('You have reached the root path');
});

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send(`Data sent in query is ${req.query.data} `);
    // res.send(`Welcome ${req.query.color} ${req.query.fruit} `);
});