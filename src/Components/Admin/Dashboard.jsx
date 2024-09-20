import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allusers } from '../redux/allusersSlice';
import { getProducts } from '../redux/addproductsSlice';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function Dashboard() {
    const item = useSelector(state => state.allusers.data);
    const items = useSelector(state => state.product.data);
    const dispatch = useDispatch();
    const totalUser = item.length;
    const totalProduct = items.length;

    useEffect(() => {
        dispatch(allusers());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // Data for the chart
    const data = [
        { name: 'Users', total: totalUser, color: '#ff0000' }, // Red
        { name: 'Products', total: totalProduct, color: '#ffff00' }, // Yellow
    ];

    return (
        <div className='p-4'>
            <div className='flex flex-wrap justify-between gap-4'>
                <div className='bg-gray-300 w-full md:w-72 h-28 shadow-lg rounded-md flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-black text-2xl'>TOTAL USER</h1>
                    <h3 className='font-bold text-black text-2xl'>{totalUser}</h3>
                </div>
                <div className='bg-gray-300 w-full md:w-72 h-28 shadow-lg rounded-md flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-black text-2xl'>TOTAL PRODUCTS</h1>
                    <h3 className='font-bold text-black text-2xl'>{totalProduct}</h3>
                </div>
                <div className='bg-gray-300 w-full md:w-72 h-28 shadow-lg rounded-md flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-black text-2xl'>TOTAL ORDERS</h1>
                    <h3 className='font-bold text-black text-2xl'>3</h3>
                </div>
            </div>
            
            {/* Bar Chart */}
            <div className='mt-14'>
                <h2 className='font-bold text-black text-xl mb-7'>User and Product Statistics</h2>
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
}

export default Dashboard;
