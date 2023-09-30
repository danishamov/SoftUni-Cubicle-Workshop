const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarConfig = require("./config/handlebarsConfig");

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarConfig(app);

//Router
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
