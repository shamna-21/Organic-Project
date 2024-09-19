import React, { useEffect, useState } from "react";
import axios from "axios";
import leaf from '../Images/logo-leaf-new.png'
import lemon from '../Images//shopping.png'
import peanut from '../Images/peanut.png'
import leaves from '../Images/leaves.png'
import { FaArrowRight } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";

function Bestseller() {
  const [best, setBest] = useState([]); 

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await axios.get("http://localhost:3001/products");
        const filteredItems = res.data.filter(
          (data) => data.category === "bestproduct"
        );
        setBest(filteredItems);
      } catch (err) {
        console.error("Failed to fetch data:", err); 
      }
    }
    fetchdata();
  }, []); 

  return (
    <div className="m-10 flex flex-col gap-4   ">
    <div className="flex flex-col items-center gap-2">
    <h1 className="text-3xl font-bold items-center">Best Seller</h1>
    <img src={leaf} alt="img" className="w-16 h-8"/>
    </div>
     <div>
     {best.length>0?(
        <div className="flex justify-around items-center">
          {best.map((item)=>(
            <div >
             <img src={item.image} alt="img" className="w-72 h-72"/>
            <div className="flex flex-col items-center">
            <h1 className="text-lg font-semibold">{item.name}</h1>
            <p>${item.price}</p>
            </div>
            </div>
        ))}
        </div>
     ):(<p>NOTHING</p>)}
     </div>
     {/* next */}
     <div className="flex justify-around items-center mt-32 ">
      <div className= "bg-white shadow-xl  h-96 w-96 p-8">
         <h1 className='text-2xl font-semibold'>Farm Fresh Fruits</h1>
         <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
         <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 flex items-center justify-center mx-auto">
              <FaArrowRight className="mr-2" />
              Shop Now
            </button>
         <img src={lemon} alt="lemon" className="w-64 h-64"/>
      </div>
      <div className= "bg-white shadow-xl  h-96 w-96 p-8">
         <h1 className='text-2xl font-semibold'>Farm Fresh Fruits</h1>
         <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
         <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 flex items-center justify-center mx-auto">
              <FaArrowRight className="mr-2" />
              Shop Now
            </button>
         <img src={leaves} alt="lemon" className="w-64 h-56"/>
      </div>
      <div className= "bg-white shadow-xl  h-96 w-96 p-8">
         <h1 className='text-2xl font-semibold'>Farm Fresh Fruits</h1>
         <p>Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
         <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-800 flex items-center justify-center mx-auto">
              <FaArrowRight className="mr-2" />
              Shop Now
            </button>
         <img src={peanut} alt="lemon" className="w-64 h-64"/>
      </div>
     </div>
     {/* next */}
     <div className="bg-black h-40 flex justify-around items-center">
  <div>
    <h1 className="text-3xl text-white font-bold">Get 25% Off On Your First Purchase!</h1>
  </div>
  <div>
    <button className='flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors'>
      <RiShoppingCart2Fill className='h-6 w-6' />
      <span>SHOP NOW</span>
    </button>
  </div>
</div>

<div className="h-28 bg-gray-300 flex items-center justify-center">
  <h2 className="text-center font-semibold text-2xl">Try It For Free. No Registration Needed.</h2>
</div>

    </div>
  );
}

export default Bestseller;
