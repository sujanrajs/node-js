import express from "express";

const app = express();

// read operation (READ)
app.get("/", (req, res) => {
  res.status(200).send("Hello Backend Server");
});

app.listen(8000, () => {
  console.log("Server has started.");
});
