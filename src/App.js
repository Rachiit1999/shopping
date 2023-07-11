import { useEffect, useState } from "react";
import { ProductForm } from "./components/productForm";
import { Products } from "./components/products";
import axios from "axios";

function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products`)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => {
        debugger;
      })
      .finally((_) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <Products products={products} setProducts={setProducts} />
      <ProductForm setProducts={setProducts}/>   
    </div>
  );
}

export default App;
