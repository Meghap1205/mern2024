//jwt.sign = to create, jwt.verify = to verify, secreat key

const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware= async (req,res,next)=> {
    const token = req.header('Authorization');  //from frontend Autho.. : token

    if(!token){
        return res.status(401).json({msg : "token not provided"});
    }

    console.log("token fron auth middleware ",token);
    //assumming token in format = 'Bearer <jwtToken>', removing the "Bearer prefix"


    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from auth middleware ", jwtToken);

    try {//verifing token

        const isverified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        console.log("jwt token ",isverified);   //userid, email, isadmin iat exp in obj   from user model


         //browers token from jwt comparing with database and getting all info of user
        const userdata = await User.findOne({email: isverified.email}).select({password: 0}); 
        console.log("userdata from usemiddleware: ", userdata);

        req.user = userdata;
        req.token = token;
        req.userId = userdata._id;  //created custom property 

        next();  //must
    } catch (error) {
        return res.status(401).json({msg : "unauthorized token"});
    }

    next();
}

module.exports = authMiddleware;