const User = require("../models/User");

const submitData = async (req, res) => {
  const { body } = req;
  try {
    const newUser = new User(body);
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Data saved successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getData = async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json({
      success: true,
      message: "Data saved successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  submitData,
  getData,
};