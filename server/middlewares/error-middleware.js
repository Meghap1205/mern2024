
//to handle all errors

const errorMiddleware = (err, req,res,next) => {
    const status = err.status || 500;
    const message = err.message || "backend error";
    const extraDetails = err.extraDetails || "backend error";

    return res.status(status).json({message, extraDetails});
};

module.exports = errorMiddleware;

//now in every try error write only "next(err)" in error, it will bring control on middleware