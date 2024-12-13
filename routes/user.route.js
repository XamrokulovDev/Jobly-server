const { Router } = require("express");
const router = Router();
const {
    Register,
    Login,
} = require("../controllers/user.controller");
const { Limit } = require("../middlewares/auth");

// Register 
router.post("/register", Register);
// Login
router.post("/login", Limit ,Login);

module.exports = router;