import express from "express";

const app = express();

const port = 8700;
app.listen(port,()=>{
    console.log("Server Is Up!");
})