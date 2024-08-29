const express = require("express");
const app = express();

//Creating a utility middleware.
// app.use((req, res, next) => {
//     const timestamp = 1724897781000; //the number of milliseconds since January 1, 1970, 00:00:00 UTC
//     req.time = new Date(timestamp);
//     console.log(req.method, req.hostname, req.path, req.time.toLocaleString());
//     next();
// });

// app.use((req, res) => {
//     console.log("Hi, I'm middleware");
//     res.send("Middleware finished.");
// });

// app.use((req, res, next) => {
//     console.log("Hi, I'm middleware");
//     next();
// });

//Creating a middleware for an API that checks if the access token was passed in the query string or not.
// const checkToken = (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED");
// };

// app.get("/api", checkToken, (req, res) => {
//     res.send("Hey there. I'm the data.");
// });

app.get("/", (req, res) => {
    res.send("Hi, I'm the root");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.listen(8080, () => {
    console.log(`Server is running at http://localhost:8080`);
});