import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice ({
    name : 'cart',
    initialState : {
        cartItems:[],
    },

    reducers : {
        addToCart:(state, action) =>{
            const itemExists = state.cartItems.find(item => item.id === action.payload.id)
            if(itemExists) {
                itemExists.quantity += 1
            }else {
                state.cartItems.push({...action.payload, quantity : 1})
            }
        },
        removeFromCart:(state, action) =>{
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
              if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1; // Reduce quantity
              } else {
                state.cartItems.splice(itemIndex, 1); // Remove item completely
              }
            }
        }
        
    }
});


export const {addToCart , removeFromCart} = cartSlice.actions
export default cartSlice.reducer;