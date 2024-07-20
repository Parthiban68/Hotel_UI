import React from 'react'
import { Bghero, about, swim1, swim3 } from '../../assets/Image'

const bgstyle = {
backgroundImage: `url(${swim1})`,
backgroundRepeat: 'no-repeat',
backgroundPosition: "center",
backgroundSize: "cover",
width: "100%",
height: "100%",
opaciy: "50%"
}
 
const Hero = () => {

  return (
    <div style={bgstyle} className='relative z-[-1]'>
    <div className='relative z-50'>
        <div className="container py-16 sm:py-0">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                <div className='space-y-7 text-white order-2 sm:order-1'>
                        <h1 className='text-5xl'>Fresh & Healthy mela plan <span className='text-primary font-cursive text-7xl '>Delivery</span> in Miami</h1>
                        <p  className='lg:pr-64 '>Delicious Meals Delivered to your Door Step</p>
                </div>
                <div className='relative z-30 '>
                    {/* <img src={swim3} alt="" className='w-full h-full sm:scale-100 sm:translate-y-1' /> */}
                    <p  className='lg:pr-64 '>Delicious Meals Delivered to your Door Step</p>
                </div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default Hero