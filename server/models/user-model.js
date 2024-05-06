const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const userSchema = new mongooose.Schema({
    username: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    password: {
         type: String,
        required:true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save', async function(next){      // hash password bcrypt
    const user = this;
    console.log("Pre-save hook executed");

    if(user.isModified("password")){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
});

//json web token       //stores in cookies, local store... ,  not in database
userSchema.methods.generateToken = async function(){
    try {
       return  jwt.sign(
        {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,    //payload
       }, 
       process.env.JWT_SECRET_KEY,   //signature
       {
        expiresIn: "30d",   //optional
       }
    );
    } catch (error) {
        console.error(error);
    }
};

const User = mongooose.model('USER', userSchema); //to define model / collection name

module.exports = User;







//jWT json web token , used in authentication and authorization    Header, Payload, Signature
//1.authentication : verify identity of user
//2.authorization : determining what actions a user is allow to perform