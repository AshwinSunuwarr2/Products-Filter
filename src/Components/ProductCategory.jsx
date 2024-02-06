import React from "react";

function ProductCategory({ category }) {
  return (
    <tr className="font-mono flex justify-center pt-6">
      <th
        colSpan="2"
        className="px-1 bg-green-100 rounded-sm shadow-md border-b-2 border-black/50"
      >
        {category}
      </th>
    </tr>
  );
}

export default ProductCategory;
