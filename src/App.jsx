import React from "react";
import { ProductTable, FilterSection, MainTable } from "./Components";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-center py-4 font-semibold drop-shadow-md">
        PRODUCTS
      </h1>
      <MainTable />
    </div>
  );
}

export default App;
