const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarConfig = require("./config/handlebarsConfig");
const homeController = require("./controllers/homeControllers");

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarConfig(app);

//Router
app.use(homeController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
