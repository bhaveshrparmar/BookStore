const { Schema, model } = require("mongoose")

const bookSchema = new Schema({
    title: { type: String },
    author: { type: String },
    price: { type: Number },
    category: { type: String },
    description: { type: String }
}, { timestamps: true });

module.exports = model("book", bookSchema)