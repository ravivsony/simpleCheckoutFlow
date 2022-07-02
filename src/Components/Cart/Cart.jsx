import React, {useState,useEffect} from "react";
import "./cart.css";

const Cart = ({selectedMobiles,style,addSelectedMobilesInCart}) => {
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    setCart(selectedMobiles)
  }, [selectedMobiles])

  const clearCart=()=>{
    addSelectedMobilesInCart([])
    setCart([])

  }
  return (
    <>
      <div className=" col-6  ">
        <div className="d-flex flex-column align-self-end ">
          <nav className="navbar navbar-light bg-light pt-0 pb-0">
            <div className="container ">
              <h2 className="navbar-brand ">Cart</h2>
            <div className="d-flex">Count {cart.length>0 && `: ${cart.length}`}</div>
            </div>
          </nav>
        </div>
        <div className="anythingg">
        {
         cart.length? cart.map((item)=>{
            return(
              <div style={{marginLeft:'5px'}}>
                <h4 className="mobileName" key={item.id}>{item.mobile}</h4>
              </div>
            )
          }):<div className="emptyCart"> Your cart is empty</div>
        } 
          <button
            className="btn  w-100 text-light bottomBtn  "
            style={style}
            onClick={clearCart}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
