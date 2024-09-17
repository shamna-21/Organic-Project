import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { updateCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

function Search() {
    const [quantities, setQuantities] = useState({});
    const dispatch=useDispatch()
    const location=useLocation()
    const {results} =location.state || []
    const user=localStorage.getItem('id')
    const handleQuantityChange = (productId, change) => {
        setQuantities(prevQuantities => ({
          ...prevQuantities,
          [productId]: Math.max(1, (prevQuantities[productId] || 1) + change),
        }));
      };
      async function handleAddToCart(item) {
        const quantity = quantities[item.id] || 1;
    const itemToAdd = { ...item, quantity };
        if (user) {
      
      const isItemInCart = user.cart.some(cartItem => cartItem.id === item.id);

      if (isItemInCart) {
        alert('This item is already in your cart.');
        return;
      }
        try{
          await dispatch(updateCart({userId:user.id , item:itemToAdd}))
          console.log(itemToAdd,"cart add");
          
          alert ('Cart Added Successfully')

        }catch(err){
          console.log(err);
          
        }
      }else{
        alert('Please Login')
      }
    }
  return (
    <div>
      <div >
        {results.length>0?(<div className='grid grid-cols-4 m-2 p-3'>
            {results.map((item)=>(
                <div key={item.id} className='' >
                <img
                  src={item.image}
                  alt={item.name}
                   
                   className="w-60 h-60"
                />
                <h1>{item.name}</h1>
                <p>${item.price}</p>

                <div className="flex">
                  <button
                     onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-red-500 rounded-md h-7 w-10"
                  >
                    +
                  </button>
                  <p>{quantities[item.id] || 1}</p>
                  <button
                     onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-red-500 rounded-md h-7 w-10"
                  >
                    -
                  </button>
                </div>
                <button
                   onClick={() => handleAddToCart(item)}
                  className="bg-gray-700 text-white font-bold rounded-md"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
        </div>):(<h1>No Items</h1>)}
      </div>
    </div>
  )
}

export default Search
