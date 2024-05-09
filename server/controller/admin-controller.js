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

const deleteContact = async (req,res)=> {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id : id});
        return res.status(200).json({message: "contact deleted"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}

//single user id
const getUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id : id}, {password  : 0});
        return res.status(200).json({data});
    } catch (error) {
        console.log(error);
    }
}

const deleteUserById = async (req,res)=> {
    try {
        const id = req.params.id;  //same from route :id
        await User.deleteOne({_id: id});
        return res.status(200).json({message: "user deleted"});
    } catch (error) {
        console.log(error);
    }
}

//update
const updateUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const updatedUserData= req.body;

        const updateUser = await User.updateOne({_id : id}, {
            $set: updatedUserData,
        })
        return res.status(200).json(updatedUserData);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllUsers, getAllContact, deleteUserById, getUserById, updateUserById, deleteContact};
