 const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let sweets = [
  { id: 1, name: "Gulab Jamun", category: "Milk", price: 10, quantity: 20 },
  { id: 2, name: "Rasgulla", category: "Milk", price: 12, quantity: 15 },
  { id: 3, name: "Ladoo", category: "Dry", price: 8, quantity: 30 },
  { id: 4, name: "Chocolate Barfi", category: "Milk", price: 20, quantity: 40 }
];

app.get("/", (req, res) => {
  res.send("Sweet Shop Backend is running");
});

app.get("/api/sweets", (req, res) => {
  res.json(sweets);
});

app.post("/api/sweets", (req, res) => {
  const { name, category, price, quantity } = req.body;

  const newSweet = {
    id: sweets.length + 1,
    name,
    category,
    price,
    quantity
  };

  sweets.push(newSweet);
  res.status(201).json(newSweet);
});

app.put("/api/sweets/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, category, price, quantity } = req.body;

  const sweet = sweets.find(s => s.id === id);

  if (!sweet) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  sweet.name = name;
  sweet.category = category;
  sweet.price = price;
  sweet.quantity = quantity;

  res.json(sweet);
});

app.delete("/api/sweets/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = sweets.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Sweet not found" });
  }

  const deletedSweet = sweets.splice(index, 1);
  res.json(deletedSweet[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
