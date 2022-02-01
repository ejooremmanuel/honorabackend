const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
    company: {
      type: String,
    },
  },
  { timestamps: true }
);

const user = model("user", userSchema);

module.exports = user;