import ItemCard from "./ItemCard";

export default function ItemGrid({
  items,
  showDelete,
  onDelete,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map(item => (
        <ItemCard
          key={item._id}
          item={item}
          showDelete={showDelete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
