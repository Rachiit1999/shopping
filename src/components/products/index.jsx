import axios from "axios";

export const Products = ({ products, setProducts }) => {
  const remove = (e, product) => {
    axios
      .delete(`http://localhost:5000/api/remove/${product.id}`)
      .then(({ data }) => {
        setProducts(data);
      });
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.title} - {product.price}
          <input
            type="button"
            value="Remove"
            onClick={(e) => remove(e, product)}
          />
        </div>
      ))}
    </div>
  );
};
