const User = require("../models/User");

const submitData = async (req, res) => {
  const { body } = req;
  try {
    const newUser = new User(body);
    await newUser.save();
    res.sendFile(__dirname + "/public/confirm.html");
    // res.status(200).json({
    //   success: true,
    //   message: "Data saved successfully",
    // });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: deleted,
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
    const data = await User.find({}).sort({ _id: -1 });
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
  deleteData,
};
