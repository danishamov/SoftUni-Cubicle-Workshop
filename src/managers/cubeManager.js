const uniqid = require("uniqid");
const cubes = [];

exports.allCubs = (search, from, to) => {
  let result = cubes.slice();

  if (search) {
    result = result.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    result = result.filter((cube) => cube.difficultyLevel >= Number(from));
  }

  if (to) {
    result = result.filter((cube) => cube.difficultyLevel <= Number(to));
  }

  return result;
};

exports.gerOne = (cubeId) => cubes.find((x) => x.id === cubeId);

exports.create = (cubData) => {
  const newCube = {
    id: uniqid(),
    ...cubData,
  };
  cubes.push(newCube);

  return newCube;
};
