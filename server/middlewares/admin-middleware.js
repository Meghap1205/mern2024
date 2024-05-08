const adminMiddleware = async(req,res,next)=>{
    try {
        console.log(req.user);
        const adminRole = req.user.isAdmin;

        if(!adminRole){
            return res.status(200).json({message : "user not an admin"});
        }
       
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = adminMiddleware;