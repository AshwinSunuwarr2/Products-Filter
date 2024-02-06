import React from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

function ProductTable({ products, onlyStocked, searchText }) {
  const rows = [];
  let lastCategory = null;

  {
    products.map((product, index) => {
      if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
        return;
      }

      if (onlyStocked && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategory category={product.category} key={product.name} />
        );
      }
      rows.push(<ProductRow products={product} key={index} />);
      lastCategory = product.category;
    });
  }
  return (
    <div>
      <table className="flex flex-col">
        <thead>
          <tr className="flex justify-between">
            <th>Name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody className="">{rows}</tbody>
      </table>
    </div>
  );
}

export default ProductTable;
