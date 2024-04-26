import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Cartslice';
import { useState,useEffect } from 'react';
const Cart = () => {
  const dispatch=useDispatch()
  const cartitems=useSelector((state)=>state.cart);
  const [price,setPrice]=useState(0);
  const handleRemove=(id)=>{
    dispatch(remove(id));
  }
  const handlePrice=()=>{
    let ans=0;
    cartitems.map((item)=>{
        ans+=item.price
        return 0;
    })
    setPrice(ans.toFixed(2))
}
useEffect(()=>{
    handlePrice();
})
  return (
   
    <div>
      
    <div className='cartWrapper'>
      {
      cartitems.map((items)=>(
        <div className='cartCard' key={items.id}>
         <img src={items.image} alt='img'/>
         <h4>{items.title}</h4>
         <h5>Rs-{items.price}</h5>
         <button className='btn' onClick={()=>handleRemove(items.id)}>Remove</button>
         </div>
      ))
      }
    </div>
    
    <div className='total'>
            {
             cartitems.length>0? (<h1>Total Price of your Cart is- Rs {price}</h1>):<h1>Cart is Empty</h1>
            }
        </div>
    </div>
  )
}

export default Cart