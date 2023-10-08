const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    // validate: {
    //   validator: function (value) {
    //     return this.repeatPassword === value;
    //   },
    //   message: "The password neat to be the same",
    // },
  },
});

userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new mongoose.MongooseError("Password does not mach");
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
