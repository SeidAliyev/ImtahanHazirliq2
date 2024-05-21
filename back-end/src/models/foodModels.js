const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	price: Number,
    description:String
})

module.exports = mongoose.model("Food", schema)