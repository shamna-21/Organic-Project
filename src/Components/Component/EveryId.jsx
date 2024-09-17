import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EveryId() {
    const [item,setItem]=useState([])
    const {id}=useParams()
    useEffect(() => {
        async function fetchItem() {
          try {
            const response = await axios.get(`http://localhost:3001/products/${id}`);
            setItem(response.data);
            
          } catch (err) {
           
          }
        }
    
        fetchItem();
      }, [id]);
  return (
    <div>
      {item ? (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center py-8 text-green-600">{item.name}</h1>
          <div className='flex gap-10'>
         <div> <img src={item.image} alt={item.name} className="w-full h-auto shadow-lg rounded-md" /></div>
         <div> <p className=" mt-4">{item.description}</p>
         <p className="text-lg font-semibold mt-4">Price: ${item.price}</p></div>
          </div>
          {/* Add more item details here as needed */}
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  )
}

export default EveryId
