import React, { useState } from "react";

function FilterSection({
  onlyStocked,
  onOnlyStockChange,
  searchText,
  setSearchText,
}) {
  return (
    <div className="flex flex-col items-start gap-3">
      <input
        type="text"
        placeholder="Search.."
        className="w-1/3"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={onlyStocked}
          onChange={(e) => onOnlyStockChange(e.target.checked)}
        />{" "}
        Show items on stock only
      </label>
    </div>
  );
}

export default FilterSection;
