const mongoose = require("mongoose");

exports.extractErrorMessages = (error) => {
  if (error instanceof mongoose.MongooseError) {
    return Object.values(error.errors).map((x) => message);
  } else if (error instanceof Error) {
  }
  switch (error) {
    case "ValidationError":
    default:
      return [error.message];
  }
};
