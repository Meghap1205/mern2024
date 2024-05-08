const User = require("../models/user-model");
const Contact = require("../models/contact-nodel");

const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find({}, {password: 0});
        console.log(users);
        if(!users || users === 0){
            return res.status(404).json({message : "no user found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        
    }
};

const getAllContact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);

        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "no contact found" });
        }

        return res.status(200).json(contacts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
};

module.exports = { getAllUsers, getAllContact };


module.exports = { getAllUsers, getAllContact };


module.exports = {getAllUsers, getAllContact};