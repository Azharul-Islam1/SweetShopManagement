 const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/auth")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err.message))

const SweetSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number
})

const Sweet = mongoose.model("Sweet", SweetSchema)

app.get("/api/sweets", async (req, res) => {
  const sweets = await Sweet.find()
  res.json(sweets)
})

app.post("/api/sweets", async (req, res) => {
  const sweet = new Sweet(req.body)
  const saved = await sweet.save()
  res.status(201).json(saved)
})

app.put("/api/sweets/:id", async (req, res) => {
  const updated = await Sweet.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updated)
})

app.delete("/api/sweets/:id", async (req, res) => {
  await Sweet.findByIdAndDelete(req.params.id)
  res.json({ message: "Deleted" })
})

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
