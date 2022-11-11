import express from "express";

const app: express.Application = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send();
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});