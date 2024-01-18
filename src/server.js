const express = require("express")
const routes = require("./routes")
const database = require("./database/sqlite")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())

app.use(routes)

database()

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server is running on PORT ${PORT}`))
