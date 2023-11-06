import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState ={
    data:[]
}
const productSlice =createSlice({
    name: 'product',
    initialState,
    reducers:{
        fetchProducts(state,action){
          state.data =action.payload
        },
       
    }
})

export const {fetchProducts} = productSlice.actions
export default productSlice.reducer

export function getProducts(){
    return async function getProductThunk(dispatch,getState){
        const productRes = await axios.get("https://fakestoreapi.com/products");
        const result = productRes.data
        dispatch(fetchProducts(result))

    }
}