const express = require("express");
const {getAllUsers, getAllContact} = require("../controller/admin-controller");
const authMiddleware = require("../middlewares/authMiddleware");  //to check if user is logged in or not
const adminMiddleware = require("../middlewares/admin-middleware"); //is admin
const router = express.Router();


router.route('/users').get(authMiddleware, adminMiddleware, getAllUsers);
router.route('/contacts').get(authMiddleware, getAllContact);

module.exports = router;
