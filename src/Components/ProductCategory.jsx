import React from "react";

function ProductCategory({ category }) {
  return (
    <tr className="font-mono">
      <th colSpan="2">{category}</th>
    </tr>
  );
}

export default ProductCategory;
