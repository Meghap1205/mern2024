const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');

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
})

userSchema.pre('save', async function(next){      // hash password bcrypt
    const user = this;

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

const User = mongooose.model('USER', userSchema); //to define model / collection name

module.exports = User;