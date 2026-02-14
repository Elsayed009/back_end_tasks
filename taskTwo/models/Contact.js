 //calling mongoose 
 const mongoose = require("mongoose");
// createing scheme using mongoose
const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true // for no repeat
    },
    phones: {
        type: [String], // array of Strings
        default: [], // default empty array
        unique: true // for no repeat

      
    },
    socialMedia:{
        twitter: {
            type: String
        },
        Facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    }
}, {timestamps: true});

//exports the model
// const Contact = mongoose.model("Contact", contactSchema)
const Contact = mongoose.model("Contact", contactSchema, "contacts")// here we added the third pramater to ensure that the returned get from 
// -postman- is from this collaction only 
// (making a unique routes so we dont mix collactions of the doc)

//important thing:  the first pram is the paht of the collactin
//  and if you replaced it with another existing path from another app -worngly or not-
//  -but- in the same collaction decument on the mongoose database that its local for you -for your pc-,
//  when you make a get action on the postman app you will get the all data for the two pathes
//  -that is were from defernt apps !!- 
// why? because you made the two apps on the same collaction
//  and the get method here is general for the two pathes  
// example: 
// const Contact = mongoose.model("Task", contactSchema)

module.exports= Contact;