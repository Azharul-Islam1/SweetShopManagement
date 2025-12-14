import { useState } from "react";

export default function AddItemForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const submit = () => {
    if (!form.name || !form.category || !form.price || !form.stock) return;
    onAdd(form);
    setForm({ name: "", category: "", price: "", stock: "" });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {Object.keys(form).map(key => (
          <input
            key={key}
            placeholder={key}
            className="border p-3 rounded-lg"
            value={form[key]}
            onChange={e =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}
      </div>

      <button
        onClick={submit}
        className="w-full bg-purple-600 text-white py-3 rounded-xl"
      >
        Add Item
      </button>
    </div>
  );
}
