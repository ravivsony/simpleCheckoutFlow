import React, { useState, useEffect } from "react";
import "./product.css";

const Products = ({products,style,addSelectedMobilesInCart,selectedMobiles,filterProducts}) => {

  const [state, setState] = useState({
    selectedMobiles:[],
    input:'',
    searchedItem:[]
  })

  useEffect(() => {
    setState({...state,selectedMobiles:selectedMobiles})
  }, [selectedMobiles])

  function addToCart() {
    addSelectedMobilesInCart(state.selectedMobiles)
    var x = document.getElementsByClassName("form-check-input");
      for(let i=0; i<=x.length; i++) {
      x[i].checked = false;
      }
  }

  function checkBoxHandler(e, item) {
    if(e.target.checked){
      setState({...state,selectedMobiles:[...state.selectedMobiles,item]})
    }
  }

  return (
    <div className="col-6">
      <div className="d-flex flex-column align-self-end ">
        <div>
          <form class="d-flex w-100 my-1" >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search the mobile"
              aria-label="Search"
              value={state.input}
              onChange={(e) => {
                setState({...state,input:e.target.value});
                filterProducts(e.target.value.toLowerCase())
              }}
              autoComplete="off"
            />
          </form>
        </div>
        <div className="anything">
        {products && products.map((item)=>{
          return (
            <div className="d-flex">
              <div className="form-check my-1">
              <label
                  className="form-check-label"
                  htmlFor={item.mobile}
                >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name={item.mobile}
                  checked={state.selected && state.selected.map(obj=>obj.mobile===item.mobile?true:false)}
                  id={item.mobile}
                  onChange={(e) => checkBoxHandler(e,item)}
                />
                </label>
              </div>
              <div>
                <h4 className="mobileName" key={item.id}>{item.mobile}</h4>
              </div>
            </div>
          )
        })}
      
        </div>
        <button
            className="btn w-100 text-light  bottomBtn position-sticky"
            style={style}
            onClick={addToCart}
          >
            ADD TO CART{" "}
          </button>
      </div>
    </div>
  );
};

export default Products;
