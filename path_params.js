const express = require('express');
const app = express();

const PORT = 3001; // OR 8080

app.listen(PORT, () => {
    console.log(`Server is Listening on port http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('You have reached the root path');
});

//Path Parameters
app.get("/:username", (req, res) => {
    console.log(req.params);
    res.send(`Welcome ${req.params.username}`);
});