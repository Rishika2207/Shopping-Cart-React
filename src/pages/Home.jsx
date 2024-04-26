//import React,{useState,useEffect} from 'react'
import React,{useEffect} from 'react'
//import list from '../List'
import { add } from '../redux/Cartslice'
import { useDispatch, useSelector } from 'react-redux'
import {STATUSES, fetchProduct } from '../redux/ProductSlice'
const Home = () => {
  const dispatch=useDispatch();
    // const[products,setProducts]=useState([])
    // useEffect(()=>{
    //      const fetchProduct=async ()=>{
    //         const res=await fetch("https://fakestoreapi.com/products");
    //         const data=await res.json();
    //         setProducts(data);
    //         setProducts([...data,...list]);
            
    //      }
    //      fetchProduct();
    // },[])
    const {data:products,status}=useSelector((state)=>state.product)
    useEffect(()=>{
      dispatch(fetchProduct());
    },[])
    const handleAdd=(product)=>{
        dispatch(add(product))
    }
    if(status===STATUSES.Loading){
      return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
    }
  return (
    <div className='productsWrapper'>
        {
            products.map((product)=>(
                <div className='card' key={product.id}>
                   <img src={product.image} alt='img'/>
                   <h4>{product.title}</h4>
                   <h5>{product.price}</h5>
                   <button className='btn' onClick={()=>handleAdd(product)}>Add to Cart</button>
                </div>
            ))
            
        }
    </div>
  )
}

export default Home