import { createSlice } from "@reduxjs/toolkit";

//const [cart,setCart]=React.useState([])
const initialState =[]
const cartSlice =createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload);
        },
        removeFromCart(state,action){
            return state.filter(item=>item.id !== action.payload) //action.payload means id 
        }
    }
})

export const {add,removeFromCart} = cartSlice.actions
export default cartSlice.reducer