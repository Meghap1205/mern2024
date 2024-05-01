const {z} = require("zod");  //for validation constrains

//object schema
const signupSchema = z.object({
    username: z
     .string({required_error: "Name is required"})
     .trim()
     .min(3, {message: "Name must be at least of 3 chars"})
     .max(255, {message: "Name must not be more than 255 characters"}),
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "invalid email address"})
    .min(3, {message: "Email must be at least of 3 chars"})
    .max(255, {message: "Email must not be more than 255 characters"}),
    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10, {message: "Phone no must be 10 digits"})
    .max(10, {message: "Phone no must be 10 digits"}),
    password: z
    .string({required_error: "password is required"})
    .min(6, {message: "password must be at least of 6 chars"})
    .max(255, {message: "password not be more than 255 characters"}),

});

module.exports = signupSchema;

