const express = require('express');
const router = express.Router(); // router - req and res ne server thi alag handle karava
//const {home, register} = require("../controller/auth.controller");   // controller-   req ni same shu res/action fun aene separate karvanu
const authcontroller =  require("../controller/auth.controller");  //jyare aek thi vadhare hoy (home, register...)
const signupSchema = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/authMiddleware");


// router.get('/', (req, res) => {
//     res.send(`welcome from router`);        //option 1
// });

// router.route("/").get((req,res) =>{
//     res.send(`welcome from router2`);         //option 2
// }

router.route("/").get(authcontroller.home); //option 1 controller
router.route("/register").post(validate(signupSchema), authcontroller.register); //first validate 
router.route("/login").post(authcontroller.login);

router.route("/user").get(authMiddleware, authcontroller.user);//authMiddleware = to check wherether user is logged in or not

module.exports = router;