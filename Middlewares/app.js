const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


// app.use((req, res, next) => {
//     console.log("Hi, I'm middleware");
//     next();
// });

app.use((req, res, next) => {
    console.log(req);
    next();
});

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new Error(401, "ACCESS DENIED");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi, I'm the root");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.use((err, req, res, next) => {
    let { status, message } = err;
    res.status(status).send(message);
});

// app.use((req, res) => {
//     res.status(404).send("Page not found");
// });

app.listen(8080, () => {
    console.log(`Server is running at http://localhost:8080`);
});