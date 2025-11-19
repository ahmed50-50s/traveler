export default function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Cultural",
    "Adventure",
    "City Tour",
    "Historical",
    "Wildlife",
    "Relaxation",
  ];

  return (
    <div className="flex justify-center ">
      <select
        className="border border-gray-300 rounded p-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "All" ? "All Categories" : cat}
          </option>
        ))}
      </select>
    </div>
  );
}
