import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allusers } from "../redux/allusersSlice";
import axios from "axios";
import { Link } from "react-router-dom";

function Allusers() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.allusers.data);

  useEffect(() => {
    dispatch(allusers());
  }, [dispatch]);

  console.log(item);

  async function handleclick(userid, status) {
    const current = !status;
    try {
      await axios.patch(`http://localhost:3001/user/${userid}`, {
        blocked: current,
      });
      dispatch(allusers());
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-700">ALL USERS</h1>
      {item ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr className="border-b border-gray-200">
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Action</th>
                <th className="py-2 px-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {item.map((itm) => (
                <tr key={itm.id} className="border-b border-gray-200">
                  <td className="py-2 px-4">{itm.id}</td>
                  <td className="py-2 px-4">{itm.name}</td>
                  <td className="py-2 px-4">{itm.email}</td>
                  <td className="py-2 px-4">
                    {itm.blocked ? (
                      <button
                        onClick={() => handleclick(itm.id, itm.blocked)}
                        className="bg-blue-500 text-white w-16 h-8 rounded-md shadow-lg hover:bg-blue-600"
                      >
                        UnBlock
                      </button>
                    ) : (
                      <button
                        onClick={() => handleclick(itm.id, itm.blocked)}
                        className="bg-red-500 text-white w-16 h-8 rounded-md shadow-lg hover:bg-red-600"
                      >
                        Block
                      </button>
                    )}
                  </td>
                  <td>
                    
                  <Link to={`/admin/allusers/${itm.id}`}>
                    <button className="bg-green-500 text-white w-16 h-8 rounded-md shadow-lg hover:bg-green-600">
                      More
                    </button>
                 
                  
                   </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">Nothing to display</p>
      )}
    </div>
  );
}

export default Allusers;
