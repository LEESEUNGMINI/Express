import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hi,, broou..! & Github Push");
});

app.listen(PORT, () => {
  console.log(`♥Sever on: http://localhost:${PORT}`);
});
