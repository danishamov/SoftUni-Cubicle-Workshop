const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hollo from England");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
