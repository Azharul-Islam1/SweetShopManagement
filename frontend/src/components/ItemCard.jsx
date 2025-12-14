 import { getImage } from "../utils/imageMap";

export default function ItemCard({ item, showDelete, onDelete }) {
  const image = getImage(item.category, item.name);

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      {image ? (
        <img
          src={image}
          alt={item.name}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
      ) : (
        <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-xl mb-4 text-gray-400">
          Image not found
        </div>
      )}

      <h3 className="text-lg font-semibold capitalize">
        {item.name}
      </h3>

      <p className="text-sm text-gray-500 capitalize">
        Category: {item.category}
      </p>

      <p className="text-green-600 font-bold mt-2">
        ₹{item.price}
      </p>

      {showDelete && (
        <button
          onClick={() => onDelete(item._id)}
          className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg"
        >
          Delete
        </button>
      )}
    </div>
  );
}
