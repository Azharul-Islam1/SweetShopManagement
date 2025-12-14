const express = require("express")
const Sweet = require("../models/Sweet")
const auth = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/", auth, async (req, res) => {
  res.json(await Sweet.find())
})

router.post("/", auth, async (req, res) => {
  const sweet = await Sweet.create(req.body)
  res.json(sweet)
})

router.put("/:id", auth, async (req, res) => {
  res.json(await Sweet.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

router.delete("/:id", auth, async (req, res) => {
  await Sweet.findByIdAndDelete(req.params.id)
  res.json({ message: "Deleted" })
})

module.exports = router
