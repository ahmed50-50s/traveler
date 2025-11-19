export default function TripSearch({ setSearch }) {
  return (
    <div className="w-1/2 max-w-md mx-auto my-8">
      <input
        type="text"
        placeholder="Search for trips..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
