const {
  getHomePage,
  getAboutPage,
  getServices,
  getContact,
  getConfirm,
} = require("../controllers/pages.controller");
const router = require("express").Router();

router.get("/about", getAboutPage);
router.get("/services", getServices);
router.get("/contact", getContact);
router.get("/", getHomePage);
router.get("/confirm", getConfirm);

module.exports = router;
