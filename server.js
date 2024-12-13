// Importing 
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandle = require("./middlewares/error");
// Dotenv 
require("dotenv").config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Developer tools
if (process.env.NODE_ENV === "developer") {
    app.use(morgan("dev"));
}

// Routes 
app.use("/api/v1/auth", require("./routes/user.route"));

// MongoDB connection
connectDB();

// Error Handler
app.use(errorHandle);

// PORT and Listening 
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})