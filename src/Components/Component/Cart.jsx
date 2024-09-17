import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, RemoveItem } from "../redux/cartSlice";
import {  useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userId = localStorage.getItem("id");
const navigate=useNavigate()
  useEffect(() => {
    if (userId) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, userId]);

  const cartItems = user?.cart || [];

  const handleRemoveFromCart = (itemId) => {
    dispatch(RemoveItem({ userId: user.id, itemId }));
  };

  const totalPrice = cartItems
    .reduce((pre, curr) => pre + curr.price * curr.quantity, 0)
    .toFixed(2);
  
    
    function procedeclick(params) {
      navigate('/pay',{state:{cartItems,totalPrice}})
    }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-extrabold text-center py-8 text-green-600">
        Cart
      </h2>
      {cartItems.length > 0 ? (
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 bg-white border border-gray-200">
            <thead className="text-xs text-green-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b hover:bg-gray-100"
                >
                  <td className="px-6 py-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4 text-green-800 font-semibold">
                    {item.name}
                  </td>
                  <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-green-900">
              Total Price: ${totalPrice}
            </h3>
          </div>
          <div className="text-center flex justify-around pb-3">
            {" "}
           
            <button onClick={procedeclick} className="px-6 py-2 text-center bg-green-600 text-white font-semibold rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center text-xl">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
