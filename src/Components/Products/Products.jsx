import React, { useState, useEffect } from "react";
import cart from "../CartData";

import "./product.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const isChecked = false;
  const [input, setInput] = useState("");

  const productList = [];
  useEffect(() => {
    fetch("/api/reminders")
      .then((response) => response.json())
      .then((json) => setProducts(json.reminders))
      .catch((err) => console.log(err));
  }, []);

  function submit(e) {
    e.preventDefault();
    if (input !== "") {
      for (let item of products) {
        item.text = item.text.toLowerCase();
        if (item.text.includes(input.toLowerCase())) {
          productList.push(item);
        }
      }
    }
  }
  console.log(productList);

  function addToCart(item) {
    if (cart !== null && isChecked === true) {
      cart.push(item);
    }
  }

  return (
    <div className="col-6">
      <div className="d-flex flex-column align-self-end ">
        <div>
          <form class="d-flex w-100 my-1" onSubmit={submit}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter the Products"
              aria-label="Search"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              autoComplete="off"
            />
            <button class="btn text-light " style={props.style} type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="anything">
          {productList ? (
            productList.map((item, id) => {
              return (
                <>
                  <div className="d-flex">
                    <div className="form-check my-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={isChecked}
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      ></label>
                    </div>
                    <div>
                      <h4 key={id}>{item.text}</h4>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <></>
          )}
          <button
            className="btn w-100 text-light "
            style={props.style}
            id="add"
            onClick={addToCart}
          >
            ADD TO CART{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
