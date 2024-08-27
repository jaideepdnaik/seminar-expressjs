const express = require("express");
const app = express();
// const path = require("path");

const PORT = 3000; // OR 8080

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/about", (req, res) => {
    res.send("This is the about page.");
});

app.listen(PORT, () => {
    console.log(`Server is Listening on port http://localhost:${PORT}`);
});