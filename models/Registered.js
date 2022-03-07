const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const registered = model("registered", userSchema);

module.exports = registered;
