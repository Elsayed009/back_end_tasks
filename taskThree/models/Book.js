const mongoose = require("mongoose");
const auth_sync = {type: mongoose.Schema.Types.ObjectId, ref: 'Auther', required: true};
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    auther: auth_sync

}, {timestamps: true});

const Book = mongoose.model("Book", bookSchema)
module.exports= Book;