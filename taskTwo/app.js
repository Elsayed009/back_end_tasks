//preparing the environment for work

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose= require("mongoose");
const PORT = process.env.PORT|| 5000;

//connection
async function dbconnection() {
    try{
        //here we will connect the mongoose
        await mongoose.connect(process.env.URL);
        console.log("server worked successfully")
    }catch (err){
        console.log("server failed, Error details: ", err.message);
    }
}

//calling the connection func
dbconnection()

//models
const Contact = require("./models/Contact");



//routes
app.post("/contact", async (req, res)=>{
try{
    const {fullName,phones,socialMedia } =req.body;

    const contact = await Contact.create({
        fullName,
        phones,
        socialMedia
    });
    res.status(200).json({
        msg: "post initied",
        data: contact
    });
}catch (err){
    res.status(500).json({msg: err.message}) // postman server error details
    console.log("Error",err.message)
}
})

app.get("/contacts", async (req, res)=>{
    try{
        const contacts = await Contact.find();
        res.status(200).json({
            msg: "getting all contacts: ",
            data: contacts
        })
    }catch (err){
        res.status(500).json({msg: err.message}) // postman server error details
        console.log("server failed",err.message);
    }
})


//run the server
app.listen(PORT, ()=>{
    console.log("server work on port: ", PORT)
})






