import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser,updateCart } from "../redux/cartSlice";
import glosery from '../Images/Oatts.png'
import { Link } from "react-router-dom";

function Gloseries() {
  const [product, setProduct] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const user=useSelector(state=>state.user.user)

  useEffect(() => {
    async function fetchData(params) {
      try {
        const prodResponse = await axios.get("http://localhost:3001/products");
        const prodData = prodResponse.data;
        const filtereedproducts = prodData.filter(
          (item) => item.category === "Oats"
        );
        setProduct(filtereedproducts);
        const UserId = localStorage.getItem("id");
        if (UserId) {
          dispatch(fetchUser(UserId));
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [dispatch]);
    // const handleClick = (item) => {
    //   setSelectedProduct(item);
    // };
      const handleQuantityChange = (productId, change) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max(1, (prevQuantities[productId] || 1) + change),
    }));
  };

    // const closeModal = () => {
    //   setSelectedProduct(null);
    // };

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
  const filtereedProduct=product.filter((prod)=>prod.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-around gap-9">
    <div className="lg:w-1/4 mb-6 lg:mb-0 rounded-lg p-6">
 
  <div className="mb-6 mt-4">
    <input
      type="search"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
    />
  </div>
  

  <div className="mb-6">
    <img
      src={glosery}
      alt="glosery"
      className="w-full h-52 object-cover rounded-lg shadow-lg"
    />
  </div>
 
  <hr className="my-6 border-gray-300" />
 
  <div className="text-gray-700 leading-relaxed">
    <p className="mb-4">
    For instance, organic and steel-cut oats are far more nutritious than the “quick” oats you can find in a bag. They also aren't full of extra, unnecessary sugar and preservatives. It's all about making healthy choices (and if you need some help with that, that's what we're here for).
    </p>
    <hr className="my-6 border-gray-300" />
    <p className="mb-4">
    Yes, oats can be eaten without cooking. For example, there are a number of no-bake cookies containing oats that are very popular. However, because some individuals have more sensitive digestive tracts
    </p>
    <hr className="my-6 border-gray-300" />
 
    <p>
    Another thing to consider is texture. Steel-cut oats have a firmer consistency than rolled and instant oats, which have a smoother, creamy texture. With all of this in mind, go forth and enjoy your oats however you please
    </p>
  </div>
</div>

    <div>
    <h2 className="text-4xl font-extrabold text-start py-8 text-green-600">OATS</h2>
      <div >
        {filtereedProduct.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtereedProduct.map((item, ind) => (
              <div key={item.id} >
                <Link to={`/oats/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  //  onClick={() => handleClick(item)}
                   className="w-60 h-60"
                /></Link>
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
             {/* {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg relative">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {selectedProduct.name}
              </h1>
              <div className="flex flex-col md:flex-row md:space-x-8">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md"
                />
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <p className="text-lg text-gray-700 mb-4">
                    {selectedProduct.description}
                  </p>
                  <p className="text-2xl font-semibold text-gray-800 mb-6">
                    Price: ${selectedProduct.price}
                  </p>

                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
          </div>
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
    </div>
  );
}

export default Gloseries;


