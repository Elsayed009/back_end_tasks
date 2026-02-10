require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());
const mongoose= require("mongoose");

// adding port path to a variable
const PORT = process.env.PORT;

//now we need to connect mongodb 
// so we will use an async func with mongoose.connect cause its framwork 
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
//after we cheacked that the server is running now we need to link the models we make

//models
const Task = require("./models/Task");

// now its logic time for the model

//routes
//post APIs
app.post("/task", async (req, res)=>{
try{
    const {title,isCompleted } =req.body;
        // here we have an important realize you should pass the key name in the {}=req.body
        //  even if it wasnt required cause if you didnt passed it here it wont be restored in the json file of db

    const task = await Task.create({
        title,
        isCompleted
    });
    res.status(200).json({
        msg: "post initied",
        data: task
    });
}catch (err){
    res.status(500).json({msg: err.message})
    //here we replaced the string message "msg" with a dynmic msg "err.message"  
    //that shows the error details in the #postman program and this before was a problem for us now we solve it
    console.log("Error",err.message)
}
})

// get APIs
app.get("/tasks", async (req, res)=>{
    try{
        const tasks = await Task.find();
        // so we can get all tasks
        res.status(200).json({
            msg: "getting all tasks",
            data: tasks
        })
    }catch (err){
        res.status(500).json({msg: err.message})
        console.log("server failed",err.message);
    }
})



//now we need the app to listen for the changes on the server so we can run it
app.listen(PORT, ()=>{
    console.log("server work on port: ", PORT)
})







