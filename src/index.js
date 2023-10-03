const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarConfig = require("./config/handlebarsConfig");
const dbConnect = require("./config/dbConfig");
const routs = require("./routes");

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarConfig(app);

dbConnect()
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.log("DB error", err));

app.use(routs);

app.listen(PORT, () => {
  console.log(`Server is running on port...${PORT}`);
});
