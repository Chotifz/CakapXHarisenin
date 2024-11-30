"use client";

import { Button } from "./ui/button";

export default function FilterBar({
  categories,
  selectedCategory,
  onFilterChange,
  onOrderChange,
  orderBy,
}) {
  const orderOptions = [
    { label: "Terbaru", value: "" },
    { label: "Cheaper Price", value: "CHEAPER_PRICE" },
    { label: "Best Seller", value: "BEST_SELLER" },
    { label: "Rating", value: "RATING" },
  ];

  return (
    <div className="flex flex-col justify-between pt-4  h-72 ">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 ">
        <Button
          variant="ghost"
          className={`px-2 py-2 text-base text-black ${
            selectedCategory === ""
              ? "border-b-2 border-black hover:bg-transparent"
              : " hover:bg-transparent"
          }`}
          onClick={() => onFilterChange("")}
        >
          All Categories
        </Button>
        {categories.map((cat) => (
          <Button
            variant="ghost"
            key={cat.categoriesId}
            className={`px-2 py-2 text-base text-black  ${
              selectedCategory === cat.categoriesId
                ? "border-b-2 border-black hover:bg-transparent"
                : " hover:bg-transparent"
            }`}
            onClick={() => onFilterChange(cat.categoriesId)}
          >
            {cat.categoryName}
          </Button>
        ))}
      </div>

      {/* Order Filter */}
      <div className="flex flex-wrap gap-2 ">
        {orderOptions.map((option) => (
          <Button
            key={option.value}
            variant="ghost"
            className={`px-2 py-2 text-base text-black ${
              orderBy === option.value
                ? "border-b-2 border-black hover:bg-transparent"
                : " hover:bg-transparent"
            }`}
            onClick={() => onOrderChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
