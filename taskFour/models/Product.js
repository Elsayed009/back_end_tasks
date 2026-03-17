const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
    required: true
},
    category: {
        type :  String
    },
    price: {
        type :Number,
        required: true
    }

}, {timestamps: true});
const Porduct = mongoose.model("Porduct", productSchema);
module.exports = Porduct;