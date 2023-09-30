const uniqid = require("uniqid");
const cubes = [];

exports.allCubs = () => cubes.slice();

exports.gerOne = (cubeId) => cubes.find((x) => x.id === cubeId);

exports.create = (cubData) => {
  const newCube = {
    id: uniqid(),
    ...cubData,
  };
  cubes.push(newCube);

  return newCube;
};
