const router = require("express").Router();
const cubManager = require("../managers/cubeManager");

router.get("/create", (req, res) => {
  //console.log(cubManager.allCubs());
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  cubManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });

  res.redirect("/");
});

module.exports = router;
