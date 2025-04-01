import React from "react";
import { removeFromCart } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-5">
      <div>
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {
          cartItems.length === 0 ? ( <p className="text-gray-500">Your cart is Empty </p>) : (
            cartItems.map((displayItem) => (
              <div className="border p-3 mb-2 rounded flex justify-between items-center">
                <img src={displayItem.image} alt={displayItem.title} className="w-16 h-16 object-contain" />
                <div>
                <h3 className="text-lg">{displayItem.title}</h3>
                <p>${displayItem.price} x {displayItem.quantity}</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(displayItem.id))}>Remove

                </button>

                
              </div>
            ))
          )
        }
      </div>
    </div>
  );
};

export default Cart;
