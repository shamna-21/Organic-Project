import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { allusers } from '../redux/allusersSlice';

function AdminOrder() {
    const items = useSelector((state) => state.allusers.data);
    const dispatch=useDispatch()
    
   
    useEffect(() => {
        dispatch(allusers());
    
      }, [dispatch]);
      const datass = (items || []).flatMap(user=>(user.payment ||[]).flatMap(payment=>payment.order || []))

   
    
   console.log(items);
 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Orders</h1>

      {datass.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr>
             
              <th className="border px-4 py-2">Product Image</th>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {datass.map((order, index) => (
              <tr key={index} className="border-b">
               
                <td className="border px-4 py-2">
                  <img src={order.image} alt={order.name} className="w-24 h-24 object-cover" />
                </td>
                <td className="border px-4 py-2">{order.name}</td>
                <td className="border px-4 py-2">{order.quantity}</td>
                <td className="border px-4 py-2">${order.price}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  )
}

export default AdminOrder
