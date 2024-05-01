require('dotenv').config(); //to secure db uri password , access from .env
const express = require('express');
const app = express();

const dotenv = require("dotenv");
const connectDb = require("./utils/db");
const router = require("./router/auth-router");

app.use(express.json()); //json middleware  parse req with json payload

app.use("/api/auth", router);

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