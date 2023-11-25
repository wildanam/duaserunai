import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/1", (req, res) => {
    res.render("65.ejs");
});

app.get("/2", (req, res) => {
    res.render("98.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});