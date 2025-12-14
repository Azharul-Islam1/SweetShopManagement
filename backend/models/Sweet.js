const mongoose = require("mongoose")

const SweetSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number
})

module.exports = mongoose.model("Sweet", SweetSchema)
