import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state,action){
            var isPresent=false;
            state.map((item)=>{
                if(item.id===action.payload.id){
                    isPresent=true;
                }
                return 0;
            })
            if(!isPresent){
                state.push(action.payload);
            }
            else{
                alert("Item is Already Present in the Cart")
            }
        },
        remove(state,action){
            return state.filter((item)=>item.id!==action.payload)
        }
    }
})
export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;