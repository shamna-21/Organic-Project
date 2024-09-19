import React, { useEffect, useState } from "react";
import logo from "../Images/organic-store-logo5.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { updateCart } from "../redux/cartSlice";

function Nav() {
  const [serachitem,setSearchitem]=useState([])
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user = useSelector((state) => state.user.user);
  const cartCount = user?.cart?.length || 0;
 const [dropdown,setDropdown]=useState(false)
const name=localStorage.getItem('name')
  const userId=localStorage.getItem('id')
  function handleprofileclick(params) {
      setDropdown(!dropdown)
  }
  useEffect(()=>{
    dispatch(updateCart())
  },[dispatch])
  function handleLogout() {
    window.confirm('Are You Sure')
    localStorage.removeItem('id')
    navigate('/login')
  }
  function handleLogin(params) {
    navigate('/login')
  }
 async function handleChange(e) {
   const query=e.target.value
    setSearchitem(query)
    if(!query){
      navigate('/')
      return
    }
   try{
  const resp=await axios.get('http://localhost:3001/products')
  const allproducts=resp.data
  const filter=allproducts.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()))
  navigate('/search', {state:{results:filter}})
   }catch(err){
    console.log(err);
    
   }

  }
  return (
    <div>
      <nav className=" sticky top-0 z-50 flex justify-between items-center p-4 text-gray-800 bg-white shadow-md   ">
        <div className=" flex items-start space-x-6 ">
         <Link to='/'> <img src={logo} alt="logo" className="h-8" /></Link>
          <Link to="/every" className="hover:text-gray-950">
            Eveything
          </Link>
          <Link to="/groceries" className="hover:text-gray-950">
            Groceries
          </Link>
          <Link to="/oats" className="hover:text-gray-950">
            Oats
          </Link>
          <Link to="/orders" className="hover:text-gray-950">
           Orders
          </Link>
          <input type="search" value={serachitem} onChange={handleChange} name="search" id="search" placeholder="Search..." className="border p-1 rounded-md"/>
          
        </div>
        <div className="flex items-end  space-x-5">
          <Link to="/about" className="hover:text-gray-950">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-950">
            Contact
          </Link>
          <CgProfile  className="h-8 w-7 " onClick={handleprofileclick} />
          <p className="absolute  top-10 right-16">{name}</p>
          {dropdown && (
            <div  className="absolute top-10 right-0 bg-white border border-gray-200 shadow-lg rounded-lg w-40">
              {userId?(<button 
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>):(
                    <button 
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  )}
            </div>
          )}
          <Link to='/cart' className="relative">
            <IoCartSharp className="h-8 w-7 " />
            {cartCount > 0 && (
              <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
