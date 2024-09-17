import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {id}=useParams()
  
    const [data,setData]=useState([])
    const cartitems=data.cart 
    useEffect(()=>{
        async function name() {
           const resp=await axios.get(`http://localhost:3001/user/${id}`) 
           setData(resp.data)
        }
        name()
    },[id])
  return (
    <div>
      <div>
        {data?(<div>
            <h3>ID: {data.id}</h3>
            <h3>NAME: {data.name}</h3>
            <h3>EMAIL: {data.email}</h3>
            <div>
                {data.cart?(<div>
               <h1 className='text-2xl font-bold'>Cart Items</h1>
               {cartitems.map((itm,i)=>(
                <div>
                    <h3>NAME: {itm.name}</h3>
                    <div className='w-60 h-60'><img src={itm.image} alt='img'/></div>
                    <h3>Price: ${itm.price}</h3>
                    <h3>Category: {itm.category}</h3>
                    <h3>Description: {itm.description}</h3>
                    <h3>Quantity: {itm.quantity}</h3>
                </div>
               ))}
                </div>):(<div>No Cart Items</div>)}
            </div>
        </div>):(<p>Nothing</p>)}
      </div>
    </div>
  )
}

export default UserDetails
