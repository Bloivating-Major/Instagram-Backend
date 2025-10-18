const express = require("express");
const authRouter = require("./routes/auth.routes.js");

const app = express();

app.use(express.json());

app.get("/" , (req, res)=>{
    res.send("Server is running")
})

app.use("/auth", authRouter);

module.exports = app;