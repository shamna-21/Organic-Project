// src/Sidebar.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const userid=localStorage.getItem('id')
    const [isAdmin,setIsAdmin]=useState(false)
    const navigate=useNavigate()
    function handlelogout(params) {
       
       const confirm= window.confirm('Sure...!')
       if(confirm){
        localStorage.removeItem('id')
        navigate('/login')
       }
    }
    useEffect(()=>{
        async function name(params) {
         if(userid){
            try{
                const resp=await axios.get(`http://localhost:3001/user/${userid}`) 
                if(resp.data?.admin) setIsAdmin(true)
            }catch(err){
                console.log(err);
                
            }
         }

        }
        name()
    },[userid])
    if(!isAdmin){
        return <div>
            <h1>Unauthorized</h1>
        </div>
    }
    return (
        <div className="flex">
            <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 shadow-lg">
                <div className="p-4">
                    <h2 className="text-xl font-bold mt-10">ADMIN</h2>
                </div>
                <ul className="mt-4">
                    <li>
                        <Link to="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-700">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/allusers" className="block px-4 py-2 hover:bg-gray-700">
                            All Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/allproducts" className="block px-4 py-2 hover:bg-gray-700">
                            All Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/addproducts" className="block px-4 py-2 hover:bg-gray-700">
                            Add Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/adminorders" className=" mb-3 block px-4 py-2 hover:bg-gray-700">
                            Orders
                        </Link>
                    </li>
                    <li>
                        <button onClick={handlelogout} className='px-3 py-1 bg-gray-600 ml-4 rounded-md shadow-lg hover:bg-gray-400  '>Logout</button>
                    </li>
                </ul>
            </div>
            <div className="flex-1 ml-64 md:ml-72 w-full p-6 pt-20">
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;
