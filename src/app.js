const express = require("express");
const authRouter = require("./routes/auth.routes.js");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/" , (req, res)=>{
    res.send("Server is running")
})

app.use("/auth", authRouter);

module.exports = app;