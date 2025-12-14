const categories = [
  "All",
  "sweets",
  "cake",
  "chocolate",
  "donut",
  "icecream",
];

export default function CategoryTabs({
  activeCategory ,
  setActiveCategory,
}) {
  return (
    <div className="flex gap-3 mb-6 overflow-x-auto">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-4 py-1 rounded-full capitalize border ${
            activeCategory === cat
              ? "bg-purple-600 text-white"
              : "bg-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
