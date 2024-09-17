import React from 'react'
import logo from "../Images/organic-store-white-logo.png";
import play from "../Images/play-store.png";
import app from "../Images/app-store.png";
function Footer() {
  return (
    <div className='bg-black w-full h-96'>
      <div className='grid grid-cols-3 gap-5' >
        {/* div1 */}
        <div className='m-14'>
          <img src={logo} alt='img' className='mb-8'/>
          <h3 className='text-white'>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</h3>
        </div>
        {/* div2 */}
        <div className='m-14 '>
          <h1 className='text-white text-2xl font-bold mb-5'>Site Links</h1>
          <h3 className='text-white'>Privacy Policy</h3>
          <h3 className='text-white'>Shipping Details</h3>
          <h3 className='text-white'>Offers Coupons</h3>
          <h3 className='text-white'>Terms & Conditions</h3>
        </div>
        {/* div3 */}
        <div className='m-10'>
          <h1 className='text-white text-2xl font-bold mb-5 '>Download Our Mobile App</h1>
          <p className='text-white mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
          <img src={play} alt='img' className='mb-5'/>
          <img src={app} alt='img'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
