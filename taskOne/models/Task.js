 
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

// //require models
// const User = require ("./model/user");
// const Post = require("./model/Post");
// // Middleware to parse JSON request bodies
// app.post("/users", async (req, res)=>{
//     try {
//         const user =await User.create(req.body)
        
//         console.log(req.body)
//         res.json({
//             msg: "created done",
//             data: user
//         });
//         res.send("hi user")
//     }catch (error) {
//         // res.status(500).json({message: "Server error"});
//         console.log("error: ", error.message)
//     }
// });

// app.post("/posts", async (req, res)=>{
//     try {
//        // get data from req.body
//        const {title, content} = req.body;
//     //    const title = req.body.title;
//         // return console.log(req);
//         // return console.log(req.body);
//        // insert data to db
//        const post = await Post.create({
//         title,
//         content,
//         user: req.body.userId
//        });
//        res.json({
//         msg: "post created",
//         data: post
//        });

//     }catch (error) {
//         // res.status(500).json({message: "Server error"});
//         console.log("error: ", error.message)
//     }
// });


// app.get( "/posts", async (req, res)=>{
//     try{
//         const post = await Post.find().populate("user", "username");
//         res.json({
//             data: post,

//         });
//     }catch{
        

//     };
// })




