const express = require("express")
const app = express()
require("./src/config/db")
const bodyParser = require("body-parser");
const router = require("./src/routes/foodRoutes")
const cors = require('cors')

app.listen(5000, () => {
	console.log("Server has started!")
})

app.use(cors())
app.use(bodyParser.json())
app.use("/api", router)