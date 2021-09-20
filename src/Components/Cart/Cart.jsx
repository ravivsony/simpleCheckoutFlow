import React from "react";
import "./cart.css";

const Cart = (props) => {
  return (
    <>
      <div className=" col-6  ">
        <div className="d-flex flex-column align-self-end ">
          <nav className="navbar navbar-light bg-light pt-0 pb-0">
            <div className="container ">
              <h2 className="navbar-brand ">Cart</h2>
              <div className="d-flex">Count</div>
            </div>
          </nav>
        </div>
        <div className="anythingg">
          <button
            className="btn  w-100 text-light  "
            id="cart"
            style={props.style}
          >
            CHECKOUT{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
