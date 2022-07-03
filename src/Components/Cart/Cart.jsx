import React, {useState,useEffect} from "react";
import "./cart.css";

const Cart = ({selectedMobiles,style,addSelectedMobilesInCart,deleteMobileInCart}) => {
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    setCart(selectedMobiles)
  }, [selectedMobiles])

  const clearCart=()=>{
    addSelectedMobilesInCart([])
    setCart([])

  }

  const deleteCartItem=(id)=>{
    deleteMobileInCart(id)
  }

  return (
    <>
      <div className=" col-6  ">
        <div className="d-flex flex-column align-self-end ">
          <nav className="navbar navbar-light bg-light pt-0 pb-0">
            <div className="container ">
              <h2 className="navbar-brand ">Cart</h2>
            <div className="d-flex">Count {(cart && cart.length>0 )&& `: ${cart.length}`}</div>
            </div>
          </nav>
        </div>
        <div className="anythingg">
        {
          cart  && cart.length? cart.map((item)=>{
            return(
              <div style={{ display:'flex',justifyContent:'space-between', margin:'0 0 5px 5px'}}>
                <h4 className="mobileName" key={item.id}>{item.mobile}</h4>
                <button class="btn text-light " style={style} onClick={()=>deleteCartItem(item.id)}>
                  Delete
                </button>
              </div>
            )
          }):<div className="emptyCart"> Your cart is empty</div>
        } 
      
        </div>
        <button
            className="btn  w-100 text-light bottomBtn  "
            style={style}
            onClick={clearCart}
          >
            CHECKOUT
          </button>
      </div>
    </>
  );
};

export default Cart;
