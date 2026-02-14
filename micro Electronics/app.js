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


app.listen(PORT, ()=>{
    console.log("worked on port: ", PORT)
})
