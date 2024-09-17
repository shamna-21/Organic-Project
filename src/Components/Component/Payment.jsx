import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateForm } from '../redux/formSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function Payment() {
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const location=useLocation()
    const {cartItems,totalPrice}=location.state || { cart: [], totalPrice: 0 }; 
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: '',
    email: '',
    price: totalPrice,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleClick = () => {
   try{
    const userId = localStorage.getItem('id');
    
    dispatch(updateForm({ userId, formData ,cartItems }))
    alert('Successfull')
   
    navigate('/')
   

   }catch(err){
    alert(err)
   }
  };
  
  

  return (
    <div className='flex h-screen'>
      <div className='w-1/3 p-4 '>
{cartItems && (<div>
  <table>
    <thead>
     <tr >
     <th className='p-6'>Name</th>
      <th className='p-6'>IMage</th>
      <th className='p-6'>Price</th>
     </tr>
    </thead>
   {cartItems.map((item)=>(
    <tr>
      <th className='p-6'>{item.name}</th>
      <th className='p-6'><img src={item.image} alt='img' className='w-28 h-28 '/></th>
      <th className='p-6'>{item.price}</th>
    </tr>
   ))}
   <p className='p-6'>Total Price:{totalPrice}</p>
  </table>
</div>)}
      </div>
     
      <div className="pl-16 pr-16 bg-gray-100 min-h-screen flex flex-col w-2/3">
      <h2 className="text-2xl font-bold mb-4 p-6">Payment Details</h2>
      
      <form onSubmit={handleClick} className="space-y-4">
        <input
          type="text"
          required
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>
        <input
          type="text"
          required
          name="cardNumber"
          placeholder="Credit/Debit Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>
        <input
          type="text"
          name="expirationDate"
          required
          placeholder="MM/YY"
          value={formData.expirationDate}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>
        <input
          type="text"
          name="cvv"
          placeholder="CVV/CVC"
          required
          value={formData.cvv}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>

        <h3 className="text-xl font-semibold mt-6 mb-2">Billing Address</h3>
        <input
          type="text"
          name="streetAddress"
          required
          placeholder="Street Address"
          value={formData.streetAddress}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>
        <input
          type="text"
          name="city"
          required
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>
        <input
          type="text"
          name="state"
          required
          placeholder="State/Province/Region"
          value={formData.state}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>
        <input
          type="text"
          name="zipCode"
          required
          placeholder="ZIP/Postal Code"
          value={formData.zipCode}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>
        <input
          type="text"
          name="country"
          required
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>

        <input
          type="text"
          name="phoneNumber"
          required
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>

        <input
          type="number"
          name="price"
          required
          readOnly
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        /><br/>

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md mt-4 w-full"
        >
          Pay {totalPrice}
        </button>
      </form>
    </div>
     
    </div>
  );
}

export default Payment;
