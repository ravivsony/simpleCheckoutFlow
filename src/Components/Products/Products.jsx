import React, { useState, useEffect } from "react";
import Data from "./Data";
import "./product.css";

const Products = () => {
  const [products, setProducts] = useState(null);

  // const response = await fetch("/api/products");
  // console.log(response.json());

  useEffect(() => {
    setProducts(Data);
  }, []);
  return (
    <div className="col-6 border border-primary ">
      <div className="d-flex flex-column align-self-end ">
        <div id="search">
          <form class="d-flex w-100 my-1">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter the Products"
              aria-label="Search"
            />
            <button class="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          {products?.map((item) => {
            return <h2>{item.product}</h2>;
          })}
          <button className="btn btn-danger w-100 ">ADD TO CART </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
