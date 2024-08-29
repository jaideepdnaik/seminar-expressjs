const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [{
        id: uuidv4(),
        username: "John Doe",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "Jaideep",
        content: "APIs enable communication between frontend and backend services efficiently."
    },
    {
        id: uuidv4(),
        username: "Nishanth",
        content: "Database management is crucial for storing and retrieving application data."
    },
    {
        id: uuidv4(),
        username: "Manish",
        content: "Authentication ensures secure access to protected backend resources."
    },
    {
        id: uuidv4(),
        username: "Sam",
        content: "Server-side logic handles business operations and processes user requests."
    }
];

//Home Route
app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

//Create Route
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

//Show route
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

//Edit Route
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

//Delete Route
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});