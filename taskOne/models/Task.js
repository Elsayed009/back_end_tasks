
 
 //first we call mongoose so we connect it with this file and use its features
 const mongoose = require("mongoose");
// createing scheme using mongoose
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    // name: String // just for testing the code 
    // here we have an important realize you should pass the key name in the {}=req.body even if it wasnt required
}, {timestamps: true});

// after we finish the schema we need to export it 
// so we can use it in the main file (app.js)
// for that we will save it in a variable and we will export this variable 

const Task = mongoose.model("Task", taskSchema)
module.exports= Task;






