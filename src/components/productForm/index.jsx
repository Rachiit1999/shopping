import axios from "axios";
import React, { useState } from "react";

export const ProductForm = ({ setProducts }) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();

  const add = (e) => {
    axios
      .post(`http://localhost:5000/api/add`, {
        title,
        price,
      })
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => {
        debugger;
      })
      .finally((_) => {
        setTitle("");
        setPrice("");
      });
  };

  return (
    <form className="product-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="button" value="Add" onClick={add} />
    </form>
  );
};
