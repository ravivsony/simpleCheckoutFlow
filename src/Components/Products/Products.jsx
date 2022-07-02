import React, { useState, useEffect } from "react";
import "./product.css";

const Products = ({products,style,addSelectedMobilesInCart,selectedMobiles}) => {

  const [state, setState] = useState({
    selectedMobiles:[],
    input:'',
    searchedItem:[]
  })

  useEffect(() => {
    setState({...state,selectedMobiles:selectedMobiles})
  }, [selectedMobiles])
  

  function handleSearch(e) {
    e.preventDefault();
    if (e.target.value !== "") {
      setState({...state,searchedItem:products.filter(item => item.mobile== state.input)})}}

  function addToCart() {
    addSelectedMobilesInCart(state.selectedMobiles)

    var x = document.getElementsByClassName("form-check-input");
      for(let i=0; i<=x.length; i++) {
        x[i].checked = false;
      }

  }

  function checkBoxHandler(e, item) {
    let temp=[...products]
    let array=[...state.selectedMobiles]
      if(e.target.checked){
        temp[item.id]={
          id:item.id,
          mobile:item.mobile,
          selected:true
        }
          if(temp[item.id].selected){
            array.push(temp[item.id])
          }
        setState({...state,selectedMobiles:array})
      }
  }

  return (
    <div className="col-6">
      <div className="d-flex flex-column align-self-end ">
        <div>
          <form class="d-flex w-100 my-1" onSubmit={handleSearch}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search the mobile model"
              aria-label="Search"
              value={state.input}
              onChange={(e) => {
                setState({...state,input:e.target.value});
              }}
              autoComplete="off"
            />
            <button class="btn text-light " style={style} type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="anything">
        {!state.input && products? products.map((item)=>{
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
                        checked={products.find(item=>state.selectedMobiles[state.selectedMobiles.indexOf(item.id)] && state.selectedMobiles[state.selectedMobiles.indexOf(item.id)].id)}
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
        }) :
        state.searchedItem.map((item, id) => {
              return (
                <>
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
                        checked={products.find(item=>state.selectedMobiles[state.selectedMobiles.indexOf(item.id)] && state.selectedMobiles[state.selectedMobiles.indexOf(item.id)].id)}
                        id={item.mobile}
                        onChange={(e) => checkBoxHandler(e,item)}
                      />
                

                      </label>
                    </div>
                    <div>
                      <h4 className="mobileName"  key={id}>{item.mobile}</h4>
                    </div>
                  </div>
                </>
              );
            })} 
        <button
            className="btn w-100 text-light  bottomBtn"
            style={style}
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
