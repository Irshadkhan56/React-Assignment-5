import React from "react";
import Counter from "./Components/Counter";
import ProductLike from "./components/ProductLike";

const App = () => {
  return (
    <div>

   
      <Counter />

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <ProductLike name="Laptop" />
        <ProductLike name="Phone" />
        <ProductLike name="Headphones" />
      </div>

    </div>
  );
};

export default App;