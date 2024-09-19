import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateForm } from '../redux/formSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('id');
      dispatch(updateForm({ userId, formData, cartItems }));
      alert('Successful');
      navigate('/');
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ width: '30%', padding: '10px', overflowY: 'auto' }}>
        {cartItems.length > 0 && (
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>Name</th>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>Image</th>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.name}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                      <img src={item.image} alt="img" style={{ width: '80px', height: '80px' }} />
                    </td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.price}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3" style={{ padding: '8px', border: '1px solid #ddd' }}>
                    Total Price: {totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div style={{ width: '70%', padding: '20px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Payment Details</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Credit/Debit Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="MM/YY"
            value={formData.expirationDate}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV/CVC"
            value={formData.cvv}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State/Province/Region"
            value={formData.state}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP/Postal Code"
            value={formData.zipCode}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            readOnly
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Pay {totalPrice}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
