require('dotenv').config();
const cors = require("cors");//diff ports 

const express = require('express');

const app = express();

const dotenv = require("dotenv");
const connectDb = require("./utils/db");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const  serviceRouter = require("./router/service-router");
const errorMiddleware = require("./middlewares/error-middleware");

///cors handle
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST, PUT, HEAD, DELETE, PATCH",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json()); //json middleware  parse req with json payload

app.use("/api/data", serviceRouter);
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);


app.use(errorMiddleware); //error handling

// app.get("/", (req,res) =>{
//     res.status(200).send("welcome from server.js");
// });

const PORT = 5000;
connectDb().then(()=> {
    app.listen(PORT, () => {
        console.log(`server is runnig at port no ${PORT}`);
    });
});


// app.listen(PORT, () => {
//     console.log(`server is runnig at port no ${PORT}`);
// })