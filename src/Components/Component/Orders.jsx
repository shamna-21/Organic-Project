import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Orders() {
    const [details, setDetails] = useState([]);
    const userId = localStorage.getItem('id');

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await axios.get(`http://localhost:3001/user/${userId}`);
                setDetails(resp.data.payment || []);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [userId]);

    return (
        <div className='flex flex-col min-h-screen bg-gray-100'>
            <div className='flex-grow m-5'>
                {details.length > 0 ? (
                    <div>
                        {details.map((item, i) => (
                            <div key={i}>
                                <h3 className='font-semibold text-2xl text-center m-5 underline text-green-900'>Order {i + 1}</h3>
                                <table className='border w-2/3 mx-auto shadow-lg'>
                                    <thead className='border'>
                                        <tr className='border'>
                                            <th className='border p-3'>Name</th>
                                            <th className='border p-3'>Image</th>
                                            <th className='border p-3'>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className='border'>
                                        {item.order.map((itm, i) => (
                                            <tr className='border' key={i}>
                                                <td className='border pl-7'>{itm.name}</td>
                                                <td className='border pl-7'>
                                                    <img src={itm.image} alt='img' className='w-32 h-32 m-5' />
                                                </td>
                                                <td className='border pl-7'>{itm.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h1 className='text-center text-xl'>Nothing</h1>
                    </div>
                )}
            </div>

           
        </div>
    );
}

export default Orders;
