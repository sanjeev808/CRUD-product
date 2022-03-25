import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

export default function () {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  const del = (id) => {
    fetch(`http://localhost:3333/products/${id}`, {
      method: "DELETE",
    });
    setProducts(products.filter((p) => p.id !== id));
  };
  return (
    <Wrapper>
      <Link to="/admin/products/create" className="btn">
        Add Product
      </Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>
                  <img src={p.image} alt={p.title} width="90" />
                </td>
                <td>
                  <button onclick={() => del(p.id)}>delete</button>
                  <button>edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
}
