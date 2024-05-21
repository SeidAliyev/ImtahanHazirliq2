const express = require("express")
const Food = require("../models/foodModels") // new
const router = express.Router()

// Get all posts
const getAllFood = async (req, res) => {
	const food = await Food.find()
	res.send(food)
}

const getFoodId = async (req, res) =>  {
	try {
		const food = await Food.findOne({ _id: req.params.id })
		res.send(food)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}

const postFood = async (req, res) => {
	const food = new Food({
		title: req.body.title,
		price:req.body.price,
		description: req.body.description,

	})
	await food.save()
	res.send(food)
}

const deleteFood = async (req, res) => {
	try {
		await Food.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}

module.exports = {getAllFood,postFood,deleteFood,getFoodId}