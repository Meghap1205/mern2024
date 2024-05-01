//schema.parseAsync(req.body) for validation

const validate= (schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);  //to match with validation
        req.body = parseBody;
        next();
    } catch (err) {
       // res.status(400).json({msg: error}); return array of object, all the error
       const message = err.errors[0].message;
       res.status(200).json({msg : message});
    }
};

module.exports = validate;