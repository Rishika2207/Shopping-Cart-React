import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css'

const Navbar = () => {
  const selector=useSelector;
  const value=selector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between" }}>
        <span style={{margin:"0 50px 4% 0", fontWeight:"bold",}} >Rishi Stores</span>
        <div style={{margin:"0 50px 4% 0",}}>

            <Link className='navLink' to={"/"} style={{fontWeight:"bold"}} >Home</Link>


            <Link className='navLink' style={{marginRight:"7px",fontWeight:"bold", position:"absolute"}} to={"/cart"} 
            >{<i className='fas fa-cart-plus'/>}</Link>
            
            <span style={{fontWeight:"bold",position:"relative", left:"40px",bottom:"5px"}}>{value.length}</span>
        </div>
    </div> 
    
  )
}

export default Navbar
