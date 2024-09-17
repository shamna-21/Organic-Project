import React from 'react'
import pic from '../Images/organic-products-hero.png'
import leaf from '../Images/logo-leaf-new.png'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa6";

function Front() {
  return (
    <div>
      <div className=' p-10 m-10 flex flex-col md:flex-row items-center justify-center'>
      <div className='flex-shrink-0 mb-8 md:mb-0 md:w-1/2'>
        <img src={pic} alt='pic' className='w-full h-auto' />
      </div>
      <div className='md:w-1/2 m-6 p-10 text-center md:text-left md:pl-8'>
        <div className='mb-6'>
         <img src={leaf} alt='leaf' className='w-16 md:mx-0' />
        </div>
        <h2 className='text-2xl md:text-2 mb-4 '>Best Quality Products</h2>
        <h1 className='text-3xl md:text-4xl font-bold mb-3'>Join The Organic</h1>
        <h1 className='text-3xl md:text-4xl font-bold mb-4'>Movement!</h1>
        <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <button className=' flex gap-2 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors'>
        <RiShoppingCart2Fill  className='h-6 w-6 ' /> <h1> SHOP NOW</h1>
        </button>
      </div>
    </div>
    {/* Next */}
    <div className='flex justify-between  p-10 bg-black h-52 shadow-md'>
      {/* Free shipping */}
     
      <div className='flex  justify-around items-center gap-4 bg-gray-700 px-4 w-64 h-28 rounded-sm shadow-lg'>
      <div className='py-5'>
      <MdLocalShipping color='green' className='h-10 w-10 ' />
      </div>
     <div >
     <h1 className='text-white text-2xl font-bold '>
      FREE Shipping</h1>
      <p  className='text-white font-bold '>Above $5 Only</p>
     </div>
      </div>

      <div className='flex  justify-around items-center gap-4 bg-gray-700 px-4 w-64 h-28 rounded-sm'>
      <div  className='py-5'>
      <RiProfileFill color='green' className='h-10 w-10' />
      </div>
     <div>
     <h1 className='text-white text-2xl font-bold '>Natural item</h1>
      <p className='text-white  font-bold '>100% Guarantee</p>
     </div>
      </div>

    

      <div className='flex  justify-around items-center gap-4 bg-gray-700 px-4 w-64 h-28 rounded-sm'>
      <div className='p-5'>
      <FaMoneyCheck color='green' className='h-10 w-10' />
      </div>
     <div>
     <h1 className='text-white text-2xl font-bold '>Savings</h1>
     <p className='text-white  font-bold '>At Lowest Price</p>
     </div>
      </div>

     
      <div className='flex  justify-around items-center gap-4 bg-gray-700 px-4 w-64 h-28 rounded-sm'>
      <div className='p-5'>
      <FaRetweet color='green' className='h-10 w-10' />
      </div>
     <div>
     <h1 className='text-white text-2xl font-bold '> Return</h1>
     <p className='text-white  font-bold '>No Questions Asked</p>
     </div>
      </div>

      
    </div>
    </div>
  )
}

export default Front
