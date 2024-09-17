import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allusers } from '../redux/allusersSlice';
import { getProducts } from '../redux/addproductsSlice';

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
                    <h1 className='font-bold text-black text-2xl'>TOTAL PRODUCTS</h1>
                    <h3 className='font-bold text-black text-2xl'>{totalProduct}</h3>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
