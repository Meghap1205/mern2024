const express = require('express');
const router = express.Router(); // router - req and res ne server thi alag handle karava
//const {home, register} = require("../controller/auth.controller");   // controller-   req ni same shu res/action fun aene separate karvanu
const authcontroller =  require("../controller/auth.controller");  //jyare aek thi vadhare hoy (home, register...)


// router.get('/', (req, res) => {
//     res.send(`welcome from router`);        //option 1
// });

// router.route("/").get((req,res) =>{
//     res.send(`welcome from router2`);         //option 2
// }

router.route("/").get(authcontroller.home); //option 1 controller
router.route("/register").post(authcontroller.register); //option 2 controller

module.exports = router;