const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarConfig = require("./config/handlebarsConfig");
const routs = require("./routes");

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarConfig(app);

app.use(routs);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
