const express = require("express");
const app = express();
// const path = require("path");

const PORT = 3000; // OR 8080

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("Home page");
    res.render("home.ejs");
});

app.get("/about", (req, res) => {
    res.send("This is the about page.");
});

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { number: diceValue });
});

app.listen(PORT, () => {
    console.log(`Server is Listening on port http://localhost:${PORT}`);
});