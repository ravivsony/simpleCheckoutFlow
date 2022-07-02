import React, { useState, useEffect } from "react";

const Header = ({setMyStyle}) => {
  const [isChecked, setIsChecked] = useState(false);
  
  function changeColor() {
    isChecked
      ? setMyStyle({ backgroundColor: "#e02020" })
      : setMyStyle({ backgroundColor: "#1877f2" });

    setIsChecked(!isChecked);
  }

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
                  value="#e02020"
                  checked={isChecked}
                  onChange={changeColor}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Blue
                </label>
              </div>

              <div className="form-check" style={{ marginLeft: "10px" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  value="#1877f2"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={!isChecked}
                  onChange={changeColor}
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
