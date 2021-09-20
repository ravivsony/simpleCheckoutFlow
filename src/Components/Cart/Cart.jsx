import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <div className=" col-6 border border-success ">
        <div className="d-flex flex-column align-self-end " id="cart">
          <nav className="navbar navbar-light bg-light pt-0 pb-0">
            <div className="container ">
              <h2 className="navbar-brand ">Cart</h2>
              <div className="d-flex">Count</div>
            </div>
          </nav>
        </div>
        <div>
          <button className="btn btn-danger w-100 ">CHECKOUT </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
