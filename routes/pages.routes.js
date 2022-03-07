const {
  getHomePage,
  getAboutPage,
  getServices,
  getContact,
} = require("../controllers/pages.controller");
const router = require("express").Router();

router.get("/about", getAboutPage);
router.get("/services", getServices);
router.get("/contact", getContact);
router.get("/", getHomePage);

module.exports = router;
