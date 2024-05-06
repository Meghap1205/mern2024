const Service = require("../models/service-model");

const services = async (req,res) => {
  try {
    const response  = await Service.find();
    if(!response){
        return res.status(404).json({msg : "no service found"});
    }
    return res.status(404).json({msg : response});
  } catch (error) {
    console.log(error);
  }
};

module.exports = services;
