const {
  submitData,
  getData,
  deleteData,
} = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/", submitData);
router.get("/", getData);
router.delete("/:id", deleteData);

module.exports = router;
