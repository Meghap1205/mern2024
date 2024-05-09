const express = require("express");
const {getAllUsers, getAllContact, deleteUserById, getUserById, updateUserById, deleteContact} = require("../controller/admin-controller");
const authMiddleware = require("../middlewares/authMiddleware");  //to check if user is logged in or not
const adminMiddleware = require("../middlewares/admin-middleware"); //is admin
const router = express.Router();


router.route('/users').get(authMiddleware, adminMiddleware, getAllUsers);

router.route('/users/:id').get(authMiddleware, adminMiddleware, getUserById);

router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, updateUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, deleteUserById);



router.route('/contacts').get(authMiddleware, adminMiddleware, getAllContact);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, deleteContact);

module.exports = router;
