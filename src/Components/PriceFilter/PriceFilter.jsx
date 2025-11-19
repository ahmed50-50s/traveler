import React from "react";

export default function PriceFilter({ maxPrice, setMaxPrice }) {
  return (
    <div className="max-w-sm mx-auto my-6">
      <label
        htmlFor="maxPrice"
        className="block mb-2 font-semibold text-[var(--primary-color)]"
      >
        Max Price ($)
      </label>
      <input
        type="number"
        id="maxPrice"
        placeholder="Enter max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
        min={0}
      />
    </div>
  );
}
