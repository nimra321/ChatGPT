
const express = require("express");
const { registerController, loginController, logoutController } = require("../controllers/authController");
const router = express.Router();

// ROUTES 

// register
router.post('/register' , registerController);

// login
router.post('/register' , loginController);

// logout
router.post('/register' , logoutController);

module.exports = router;