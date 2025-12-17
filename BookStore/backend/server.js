const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require("dotenv").config()
require("./config/db")()
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
const routes = require("./routes/book.route")

app.use("/api/book", routes)

app.listen(port, () => console.log(`Server : http://localhost:${port}`))