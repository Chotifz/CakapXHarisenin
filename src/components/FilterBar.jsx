"use client";

import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function FilterBar({
  categories,
  selectedCategory,
  onFilterChange,
  onOrderChange,
  orderBy,
}) {
  const orderOptions = [
    { label: "Terbaru", value: "" },
    { label: "Ulasan", value: "RATING" },
    { label: "Terlaris", value: "BEST_SELLER" },
    { label: "Harga Terendah", value: "CHEAPER_PRICE" },
  ];

  const selectedCategoryForName = categories.find(
    (category) => category.categoriesId === selectedCategory
  );
  // console.log(selectedCategoryForName?.categoryName);
  return (
    <div className="w-full flex flex-col justify-between items-start pt-4 ">
      {/* Category Filter */}
      <div className="w-full h-52 bg-secondary text-white flex flex-col gap-2  items-start py-6 px-4 rounded-xl">
        <span className="text-start font-bold text-3xl">
          {selectedCategory === ""
            ? "Semua Kategori"
            : selectedCategoryForName?.categoryName}
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              className=" bg-transparent rounded-xl font-medium"
            >
              Ubah Kategori
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side="bottom"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-60 w-[20rem] sm:w-[40rem] md:w-[48rem] lg:w-[64rem] overflow-scroll mt-2 rounded"
          >
            {categories.map((cat) => (
              <Button
                variant="ghost"
                key={cat.categoriesId}
                className={`px-4 py-2 my-2 text-base text-black border-b  ${
                  selectedCategory === cat.categoriesId
                    ? "border-b-2 border-black hover:bg-transparent"
                    : " hover:bg-transparent"
                }`}
                onClick={() => onFilterChange(cat.categoriesId)}
              >
                <DropdownMenuItem className="w-full flex items-center justify-start gap-2 ">
                  <div className="relative">
                    <img className="w-6" src={cat.icon} alt="" />
                  </div>
                  <span>{cat.categoryName}</span>
                </DropdownMenuItem>
              </Button>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Order Filter */}
      <div className="w-full flex flex-wrap gap-2 pt-4">
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
