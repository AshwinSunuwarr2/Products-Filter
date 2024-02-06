import React, { useState } from "react";
import FilterSection from "./FilterSection";
import ProductTable from "./ProductTable";

function MainTable() {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Meat", price: "$1", stocked: false, name: "Chicken" },
  ];

  const [onlyStocked, setOnlyStocked] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <FilterSection
        searchText={searchText}
        setSearchText={setSearchText}
        onlyStocked={onlyStocked}
        onOnlyStockChange={setOnlyStocked}
      />
      <ProductTable
        products={PRODUCTS}
        searchText={searchText}
        onlyStocked={onlyStocked}
      />
    </div>
  );
}

export default MainTable;
