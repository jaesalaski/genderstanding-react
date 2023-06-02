const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth } = require("../middleware/auth");

router.get("/", homeController.getIndex);
router.get("/about", homeController.getAbout);
router.get("/contact", homeController.getContact);
router.get("/api/user", authController.getUser);
router.get("/api/profile", ensureAuth, postsController.getProfile);
router.get("/api/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
// router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;