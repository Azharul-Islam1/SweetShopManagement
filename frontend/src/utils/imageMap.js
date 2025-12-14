 const images = import.meta.glob(
  "../assets/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const categoryMap = {
  sweet: "sweets",
  cake: "cakes",
  chocolate: "chocolate",
  donut: "donut",
  icecream: "icecream",
};

export function getImage(category, name) {
  if (!category || !name) return null;

  const folder =
    categoryMap[category.toLowerCase()] || category.toLowerCase();

  const cleanName = name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/-/g, "");

  for (const path in images) {
    const lowerPath = path.toLowerCase();

    if (
      lowerPath.includes(`/${folder}/`) &&
      lowerPath.replace(/\s+/g, "").includes(cleanName)
    ) {
      return images[path].default;
    }
  }

  return null;
}
