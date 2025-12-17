const router = require('express').Router()
const controller = require("../controller/book.controller")

router.post("/", controller.addBook)
router.get("/", controller.allGetBooks)
router.delete("/:id", controller.deleteBook)
router.put("/:id", controller.updateBook)
router.get("/:id", controller.singleBook)

module.exports = router 