import axios from 'axios';
import React, { useEffect, useState } from 'react'
import leaf from '../Images/logo-leaf-new.png'
import { FaStar } from 'react-icons/fa';
import profile from '../Images/profile.png'
import profile1 from '../Images/profile1.png'
import background from '../Images/background.png'
function Trenting() {
    const [item,setItem]=useState([])
    useEffect(()=>{
        async function name(params) {
            try{
        const resp= await axios.get('http://localhost:3001/products')
        setItem(resp.data.slice(28,32))
            }catch(err){
                console.log(err);
                
            }
        }
        name()
    },[])
    console.log(item);
    
  return (
    <div >
      <div>
      <div className="flex flex-col items-center gap-2 p-8 pt-20 ">
    <h1 className="text-3xl font-bold items-center ">Trending Products</h1>
    <img src={leaf} alt="img" className="w-16 h-8"/>
    </div>
        {item&&(
           <div className="grid grid-cols-4 gap-4">
           { item.map((itm) => (
               <div key={itm.id} className=" p-4">
                   
                   <img src={itm.image} alt={itm.name} className="w-72 h-72" />
                   <p>{itm.name}</p>
                   <p>${itm.price}</p>
               </div>
                ))}
            </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
      <div>
        <div className="flex flex-col items-center gap-2 p-8 pt-40">
          <h1 className="text-3xl font-bold">Customers Reviews</h1>
          <img src={leaf} alt="Leaf" className="w-16 h-8" />
        </div>
        <div className="flex gap-7 p-5">
          <div className="bg-gray-100 w-auto p-10 pt-28 shadow-lg flex-grow-0">
            <div className="flex justify-center items-center pb-7">
              <FaStar color="orange" size={28} />
              <FaStar color="orange" size={28} />
              <FaStar color="orange" size={28} />
              <FaStar color="orange" size={28} />
              <FaStar color="orange" size={28} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-center">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </h3>
              <img src={profile} alt="Profile" className="w-36 h-36 p-5" />
              <p>Mila Kunis</p>
            </div>
          </div>
          <div
            className="bg-gray-100 flex flex-col items-center pt-12 p-32 shadow-lg flex-grow-2"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1 className="text-4xl font-bold text-white">Deal Of The Day</h1>
            <h1 className="text-4xl font-bold text-white">15% Off On All</h1>
            <h1 className="text-4xl font-bold text-white">Vegetables!</h1>
            <p className="p-5 pl-4 text-white font-semibold">I am text block. Click edit button to change this text.</p>
          </div>
          <div className="bg-gray-100 w-auto p-10 pt-28 shadow-lg flex-grow-0">
            <div className="flex justify-center items-center pb-7">
              <FaStar color="orange" size={28} />
              <FaStar color="orange" size={28} />
              <FaStar color="orange" size={28} />
              <FaStar color="orange" size={28} />
              <FaStar color="orange" size={28} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-center">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </h3>
              <img src={profile1} alt="Profile1" className="w-36 h-36 p-5" />
              <p>Mila Kunis</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Trenting
