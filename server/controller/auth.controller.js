const { MongoUnexpectedServerResponseError } = require("mongodb");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs"); //  bcrypt = hash password

const home = async (req,res) => {
    try {
        res.send(`welcome from controller`); 
    } catch (error) {
        console.log(error);
    }
}

const register = async (req,res) => {
    try {
        //console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});  // without await this will not work

        if(userExist){
            return res.status(400).json({msg : "email already exists"});
        }

        // const saltRound = 10;        //option 1 bcrypt to hash password               2 option in model itself save pre function
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({username, email, phone, password});  //password: hash_password  //option 1


        //res.status(200).json ({msg : userCreated]);
        res.status(200).json ({msg : "registration successful", token: await userCreated.generateToken(), userId : userCreated._id.toString()});
    } catch (error) {
        res.status(200).json("internal server error");
    }
}


const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        console.log("Request body:", req.body); 

        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({msg : "first register"});
        }

        //cmp password

        if(password == userExist.password){
            res.status(200).json ({msg : "login successful", token: await userExist.generateToken(), userId : userExist._id.toString()});
        }
        else{
            res.status(401).json({msg : "wrong password2"});
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }
}

module.exports= {home, register, login};