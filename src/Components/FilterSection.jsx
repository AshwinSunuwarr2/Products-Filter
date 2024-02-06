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
        className="w-[250px] p-1 rounded-md"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <label className="flex justify-center gap-2">
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
