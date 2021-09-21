import React, { useState, useEffect } from "react";
import cart from "../CartData";

import "./product.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState(""); //search bar
  const [searchedItem, setSearchedItem] = useState([]);

  useEffect(() => {
    fetch("/api/mobiles")
      .then((response) => response.json())
      .then((json) => setProducts(json.mobiles))
      .catch((err) => console.log(err));
  }, []);
  const [select, setSelect] = useState(products.select);

  function search(e) {
    e.preventDefault();
    if (e.target.value !== "") {
      setSearchedItem(
        ...searchedItem,
        products.filter((item) => {
          return item.mobile.toLowerCase() === input.toLowerCase();
        })
      );
    }
  }

  function addToCart() {
    return products
      ? products.map((item) => {
          console.log(item, item.select);
        })
      : "";
  }

  function checkBoxHandler(e, item) {
    let checked = e.target.checked;
    setProducts(
      products.map((data) => {
        if (item.id === data.id) {
          data.select = checked;
        }
      })
    );
  }

  return (
    <div className="col-6">
      <div className="d-flex flex-column align-self-end ">
        <div>
          <form class="d-flex w-100 my-1" onSubmit={search}>
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
          {searchedItem ? (
            searchedItem.map((item, id) => {
              return (
                <>
                  <div className="d-flex">
                    <div className="form-check my-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={select}
                        id="flexCheckDefault"
                        onChange={(e) => checkBoxHandler(e)}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      ></label>
                    </div>
                    <div>
                      <h4 key={id}>{item.mobile}</h4>
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
