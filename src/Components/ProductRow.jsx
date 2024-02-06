import React from "react";

function ProductRow({ products }) {
  return (
    <tr className=" border-black/50 border-b-2 flex justify-between w-[250px]">
      <td className={`bg-green-200 ${products.stocked ? "" : "text-red-500"}`}>
        {products.name}
      </td>
      <td className="bg-green-200">{products.price}</td>
    </tr>
  );
}

export default ProductRow;
