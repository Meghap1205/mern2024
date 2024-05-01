//schema.parseAsync(req.body) for validation  , constrains

const validate= (schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);  //to match with validation
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
       // res.status(400).json({msg: err}); return array of object, all the error
          const message = err.errors[0].message;
    //    res.status(200).json({msg : message});
       const error = {
        status, message  //making array
       };
       
       next(error);  //call middleware
    }
};

module.exports = validate;