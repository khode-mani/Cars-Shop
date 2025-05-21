"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ICartItem {
    id : string,
    qty: number,
}

interface ICartState {
    items : ICartItem[]
}

// const initialState : ICartState = {
//     items : Cookies.get("cart")? JSON.parse(Cookies.get("cart") as string) :  []
// } 

const initialState: ICartState = {
    items: []
};






export const cartSlice  = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        setCartItemsFromStorage(state, action: PayloadAction<ICartItem[]>) {
            state.items = action.payload;
        },


        addToCartReducer(state , action : PayloadAction<string>){
            const itemIndex = state.items.findIndex(item => item.id === action.payload)

            if (itemIndex >= 0) {
                state.items[itemIndex].qty += 1;
            }else{
                state.items.push({id : action.payload , qty: 1})
            }
            localStorage.setItem("cart", JSON.stringify(state.items)); // تغییر به localStorage
        }
        ,
        removeFromCart(state , action : PayloadAction <string>){
         const itemIndex = state.items.findIndex(item=> item.id === action.payload)
         
         if (itemIndex >= 0 ) {
             if (state.items[itemIndex].qty > 1 ) {
                 state.items[itemIndex].qty -= 1;
                }else{
                    state.items = state.items.filter(item=> item.id !== action.payload)
                }
            }
            
            localStorage.setItem("cart", JSON.stringify(state.items)); // تغییر به localStorage
        }
        ,
        deleteFromCart(state , action :  PayloadAction<string>){


            state.items = state.items.filter(item=> item.id !== action.payload)

            localStorage.setItem("cart", JSON.stringify(state.items)); // تغییر به localStorage
            
            
        }
    }
})


export const {addToCartReducer, deleteFromCart , removeFromCart , setCartItemsFromStorage} = cartSlice.actions