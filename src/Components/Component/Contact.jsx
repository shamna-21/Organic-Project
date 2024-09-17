import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import leaf from '../Images/bigleaf.png'
import leafs from '../Images/logo-leaf-new.png'
function About() {
  return (
    <div className=' flex-col justify-center items-center '>
      <div >
  <h1 className='text-5xl font-bold text-green-700 text-center p-16 '>Get In Touch</h1>
      </div>
      <div className=''>
        <img src={leaf} alt='Leaf' className='w-50 mx-auto relative top-12 h-20 ' />
      </div>
      <div className='grid grid-cols-3  gap-20 ml-14 mr-14  h-80 bg-gray-200 shadow-lg '>
        <div className="w-auto h-36 shadow-lg flex flex-col items-center justify-center p-4 border border-black mt-24 ml-5 ">
        <FaPhoneAlt className='text-green-700 text-3xl mb-2 ' />
            <p className='text-center'>+123 456 7890</p>
            <p className='text-center'>+123 456 7890</p>
        </div>
        <div className="w-auto h-36 shadow-lg flex flex-col items-center justify-center p-4 border border-black mt-24 ">
        <FiMail className='text-green-700 text-3xl mb-2' />
            <p className='text-center'>info@example.com</p>
            <p className='text-center '>info@example.com</p>
        </div>
        <div className="w-auto h-36 shadow-lg flex flex-col items-center justify-center p-4 border border-black mt-24 mr-5">
        <MdLocationOn className='text-green-700 text-3xl mb-2' />
            <p className='text-center'>1569 Ave, New York,</p>
            <p className='text-center'>NY 10028, USA</p>
        </div>
      </div>
      <div>
        <div className=' mt-14 flex flex-col gap-5 justify-center items-center  '>
            <h1 className='text-3xl text-black font-bold'>Frequently Asked Question!</h1>
            <img src={leafs} alt='img' />
        </div>
        <div className='grid grid-cols-2 gap-20 mt-10 mb-10  '>
            <h3 className='text-center font-semibold'>Pulvinar nostrud class cum facilis?</h3>
            <h3 className='text-center font-semibold'>Pulvinar nostrud class cum facilis?</h3>
            <h3 className='text-center font-semibold'>Pulvinar nostrud class cum facilis?</h3>
            <h3 className='text-center font-semibold'>Pulvinar nostrud class cum facilis?</h3>
        </div>
      </div>
    </div>
  )
}

export default About
