import React from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Header from "./Header";
const Layout = () => {
  return (
    <div className=" container min-vh-100">
      <Header />
      <div className="container d-flex flex-column ">
        <div className="row ">
          <Products />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Layout;
