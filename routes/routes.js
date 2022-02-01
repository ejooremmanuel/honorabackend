const { submitData, getData } = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/", submitData);
router.get("/", getData);

module.exports = router;
