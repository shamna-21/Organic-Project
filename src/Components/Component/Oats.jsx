import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, updateCart } from "../redux/cartSlice";
import glosery from '../Images/Oatts.png';
import { Link } from "react-router-dom";

function Gloseries() {
  const [product, setProduct] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    async function fetchData() {
      try {
        const prodResponse = await axios.get("http://localhost:3001/products");
        const prodData = prodResponse.data;
        const filteredProducts = prodData.filter(item => item.category === "Oats");
        setProduct(filteredProducts);
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
      try {
        await dispatch(updateCart({ userId: user.id, item: itemToAdd }));
        alert('Cart Added Successfully');
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Please Login');
    }
  }

  const filteredProduct = product.filter(prod => prod.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col lg:flex-row gap-6 lg:gap-12">
      <aside className="lg:w-1/4 bg-bg-dark text-text-light rounded-lg p-6 shadow-lg border border-olive-green">
        <div className="mb-6 mt-4">
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-olive-green rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-olive-green transition duration-300"
            aria-label="Search products"
          />
        </div>

        <div className="mb-6">
          <img
            src={glosery}
            alt="Gloseries"
            className="w-full h-52 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="text-text-light text-sm space-y-4">
          <p className="mb-4">
            For instance, organic and steel-cut oats are far more nutritious than the “quick” oats you can find in a bag. They also aren't full of extra, unnecessary sugar and preservatives. It's all about making healthy choices (and if you need some help with that, that's what we're here for).
          </p>
          <p className="mb-4">
            Yes, oats can be eaten without cooking. For example, there are a number of no-bake cookies containing oats that are very popular. However, because some individuals have more sensitive digestive tracts.
          </p>
          <p>
            Another thing to consider is texture. Steel-cut oats have a firmer consistency than rolled and instant oats, which have a smoother, creamy texture. With all of this in mind, go forth and enjoy your oats however you please.
          </p>
        </div>
      </aside>

      <main className="flex-1">
        <h2 className="text-3xl font-semibold text-olive-green-600 mb-6">OATS</h2>
        <div>
          {filteredProduct.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProduct.map(item => (
                <div key={item.id} className="bg-bg-light border border-olive-green rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                  <Link to={`/oats/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  </Link>
                  <h3 className="text-lg font-medium mb-2 text-text-dark">{item.name}</h3>
                  <p className="text-lg text-olive-green-600 mb-4">${item.price}</p>

                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="bg-olive-green text-bg-light rounded-md px-3 py-1 hover:bg-olive-green-dark transition-colors"
                    >
                      +
                    </button>
                    <p className="mx-2 text-lg">{quantities[item.id] || 1}</p>
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="bg-olive-green text-bg-light rounded-md px-3 py-1 hover:bg-olive-green-dark transition-colors"
                    >
                      -
                    </button>
                  </div>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-olive-green-dark text-bg-light rounded-md w-full py-2 hover:bg-olive-green-dark transition-colors"
                  >
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-dark">No products available</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Gloseries;
