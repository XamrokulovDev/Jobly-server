// importing 
const express = require("express");
const app = express();
require("dotenv").config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", (req,res,next)=>{
    res.status(200).json({
        status: "success",
        message: "Welcome to Jobly API"
    })
    next();
});

// PORT and Listening 
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})