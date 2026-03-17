//preparing the environment for work

require("dotenv").config();
const express= require("express");
const app = express();
const mongoose = require("mongoose")
const PORT = process.env.PORT || 6000;
app.use(express.json());
const URL = process.env.DB_URL;



async function dblinking() {
    try{
        await mongoose.connect(URL);
        console.log("worked")
    }catch(err){
        console.log("error details: ", err.message)
    }
    
}


dblinking()
// require models
const Product = require("./models/Product");


app.post("/porduct", async (req, res)=>{
    try{
        const {name,category,price} =req.body;
        const porduct = await Product.create({
            name,
            category,
            price
        })
        res.status(201).json({
            msg: "porduct created",
             data: porduct})
    }catch (err){
        res.status(400).json({error: err.message})
        console.log(err.message)
    }
});

// getting data

app.get("/books", async (req, res)=>{
    try{ 
        const books = await Book.find().populate("auther");
        res.status(200).json({msg: "data founded", data: books})

    }catch (err){
        res.status(400).json({error: err.message})
        console.log(err.message);
    }
})


app.listen(PORT, ()=>{
    console.log("worked on port: ", PORT)
})