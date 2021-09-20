import React, { useState, useEffect } from "react";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  // const [theme, setTheme] = useState({})
  useEffect(() => {}, [isChecked]);

  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <h2 className="navbar-brand">Simple Checkout Flow</h2>
            <form className="d-flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={isChecked}
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Blue
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={isChecked}
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Red
                </label>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
