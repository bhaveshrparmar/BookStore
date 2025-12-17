const Book = require("../models/book.model")

exports.addBook = (async (req, res) => {
    const { title, author, price, category, stock, description } = req.body
    const book = await Book.create({ title, author, price, category, stock, description })
    res.json({
        success: true,
        book
    })
})

exports.allGetBooks = async (req, res) => {
    const book = await Book.find()
    res.json({
        success: true,
        book
    })
}

exports.deleteBook = async (req, res) => {
    const { id } = req.params
    await Book.findByIdAndDelete(id)
    res.json({
        success: true,
        message: "Deleted!"
    })
}

exports.updateBook = async (req, res) => {
    const { id } = req.params
    const { title, author, price, category, stock, description } = req.body
    await Book.findByIdAndUpdate(id, { title, author, price, category, stock, description })
    res.json({
        success: true,
        message: "Updated!"
    })
}


exports.singleBook = async (req, res) => {
    const { id } = req.params
    const book = await Book.findById(id)
    res.json({
        success: true,
        book
    })
}