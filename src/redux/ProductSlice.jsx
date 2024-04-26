import { createSlice } from "@reduxjs/toolkit";
export const STATUSES=Object.freeze({
    SUCCESS:'SUCESS',
    ERROR:'error',
    Loading:'LOADING'
})
const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUSES.SUCCESS,
    },
    reducers:{
        setproducts(state,action){
            state.data=action.payload
        },
        SetStatus(state,action){
            state.status=action.payload
        }
    }
})
export const {setproducts,SetStatus}=productSlice.actions;
export default productSlice.reducer;
export function fetchProduct(){
    return async function fetchProductThunk(dispatch){
        dispatch(SetStatus(STATUSES.Loading));
        try {
            const res=await fetch("https://fakestoreapi.com/products");
            const data=await res.json();
            dispatch(setproducts(data))
            dispatch(SetStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(SetStatus(STATUSES.ERROR))
        }
    }
}