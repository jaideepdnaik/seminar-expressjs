const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET Request
app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard GET Response. Welcome ${user}!`);
});

//POST Request
app.post("/register", (req, res) => {
    console.log(req.body);
    let { user, password } = req.body;
    res.send(`Standard POST Response. Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});