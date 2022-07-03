import React, { useState,useEffect } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Header from "./Header";
const Layout = () => {
  const [myStyle, setMyStyle] = useState({ backgroundColor: "#e02020" });
  const [state, setState] = useState({
    products:[],
    selectedMobiles:[],
    cart_data:[]

  })
  useEffect(() => {
    fetch("/api/mobiles")
      .then((response) => response.json())
      .then((json) => setState({...state,products:json.mobiles}))
      .catch((err) => console.log(err));
  }, []);

  const addSelectedMobilesInCart=(selectedMobiles)=>{
    setState({...state,selectedMobiles:selectedMobiles})
  }
  const deleteMobileInCart=(id)=>{
    let array=[...state.selectedMobiles]
    array= array.filter(item=>item.id!==id)
    setState({...state,selectedMobiles:array})
  }

  return (
    <div className=" container min-vh-100">
      <Header setMyStyle={setMyStyle} />
      <div className="container d-flex flex-column ">
        <div className="row ">
          <Products style={myStyle} products={state.products} selectedMobiles={state.selectedMobiles} addSelectedMobilesInCart={addSelectedMobilesInCart} />
          <Cart style={myStyle} selectedMobiles={state.selectedMobiles} addSelectedMobilesInCart={addSelectedMobilesInCart} deleteMobileInCart={deleteMobileInCart} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
