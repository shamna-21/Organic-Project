import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from '../redux/addproductsSlice'

function AddProducta() {
    const [data,setData]=useState({name:'',image:'',price:'',category:'',description:''})
    const dispatch=useDispatch()
    function handlechanged(e) {
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    function handlesubmit(e) {
       dispatch(addProducts(data))
       
       alert('done')
    }
  return (
    <div className=' '>
        <div className='m-10 bg-gray-100 mr-60 ml-60 shadow-xl'>
            <h1 className='text-3xl text-green-800 font-bold pt-5 text-center '>Add Products</h1>
            <form onSubmit={handlesubmit}>
               <div className='flex flex-row justify-center'>
               {/* <label htmlFor='name'>Name</label> */}
               <input type='text' name='name' id='name' onChange={handlechanged} placeholder='Name' required className='pl-2 border border-black m-5 rounded-md w-60 h-8' />
               </div>
               <div className='flex flex-row justify-center'>
               {/* <label htmlFor='image'>Image</label> */}
               <input type='url' name='image' id='image' onChange={handlechanged} placeholder='URL' required className='pl-2 border border-black m-5 rounded-md w-60 h-8 ' />
               </div>
               <div className='flex flex-row justify-center'>
               {/* <label htmlFor='price'>Price</label> */}
               <input type='number' name='price' id='price' onChange={handlechanged} placeholder='Price' required className='pl-2 border border-black m-5 rounded-md w-60 h-8'  />
               </div>
               <div className='flex flex-row justify-center'>
                        <select
                            name='category'
                            id='category'
                            onChange={handlechanged}
                            value={data.category}
                            required
                            className='pl-2 border border-black m-5  rounded-md w-60 h-8'
                        >
                            <option value='' disabled>Select Category</option>
                            <option value='Groceries'>Groceries</option>
                            <option value='Oats'>Oats</option>
                        </select>
                    </div>
               <div className='flex flex-row justify-center'>
               {/* <label htmlFor='description'>Description</label> */}
               <input type='text' name='description' id='description' onChange={handlechanged} placeholder='Description' required className='pl-2 border border-black m-5 rounded-md w-60 h-8' />
               </div>
               <div className='flex flex-row justify-center'>
                <button type='submit' className='bg-green-700 mb-5 w-24 rounded-md shadow-2xl hover:bg-green-900'>Submit</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default AddProducta
