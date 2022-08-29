const express = require("express");
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const app =express();
dotenv.config({path:"./Config.env"})
require("./DataBaseConnection/Connection")
const port = process.env.PORT;
app.use(express.json())
app.use(require("./Routers/Router"));
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("Hello Coding Soul");
})

app.listen(port,()=>{
    console.log("Successful");
}) 