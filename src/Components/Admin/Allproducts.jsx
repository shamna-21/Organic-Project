import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, removeitem } from "../redux/addproductsSlice";
import { Link } from "react-router-dom";

function Allproducts() {
    const [records, setRecords] = useState([]);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(getProducts());
    // setRecords(items)
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(removeitem(id));
    window.location.reload()
  }
function handlechange(e) {
    setRecords(e.target.value.toLowerCase())
}

const filteredResult=items.filter((itm)=>itm.name.toLowerCase().includes(records))
// console.log(records);

  return (
    <div className="p-6">
        <div>
            <input type="search" name="search" id="search" placeholder="Search....." onChange={handlechange}  className="p-2 border border-gray-300 rounded-md w-2/5"/>
        </div>
         <h1 className="text-3xl font-bold mb-4 text-green-700">PRODUCT LIST</h1>
      {filteredResult.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr className="border-b border-gray-300">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Edit</th>
                <th className="px-4 py-2 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredResult.map((itm) => (
                <tr key={itm.id} className="border-b border-gray-300">
                  <td className="px-4 py-2">
                    <h3 className="font-semibold">{itm.name}</h3>
                  </td>
                  <td className="px-4 py-2">
                    <div className="w-32 h-32 overflow-hidden">
                      <img
                        src={itm.image}
                        alt={itm.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">{itm.price}</td>
                  <td className="px-4 py-2">
                    <Link to={`/admin/allproducts/${itm.id}`}>
                      <button className="bg-blue-500 text-white w-16 h-8 rounded-md shadow-lg hover:bg-blue-600">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-500 text-white w-16 h-8 rounded-md shadow-lg hover:bg-red-600"
                      onClick={() => handleDelete(itm.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">Nothing</p>
      )}
    </div>
  );
}

export default Allproducts;
