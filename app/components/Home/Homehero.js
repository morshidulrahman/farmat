import React from 'react'
import { setBackgroundImage } from '../../utils/helper'
function Homehero() {
    return (
        <section className='py-10 ' style={setBackgroundImage('/images/hero-bg.jpg')}>
            <div className='flex gap-8 container flex-wrap'>
                {/* hero left */}
                <div className='flex flex-col justify-between flex-1 rounded-lg' style={setBackgroundImage('/images/hero-s-2.jpg')}>
                    <div className='md:py-16 md:px-12 py-10 px-6'>
                        <h1 className='text-3xl font-bold text-[#2A4356] leading-10 mb-6'>
                            Active Summer With <br />
                            Juice Milk 300ml
                        </h1>
                        <p className='text-base text-[#2A4356]'>
                            New arrivals with naturre fruits, juice <br />
                            milks, essential for summer
                        </p>
                        <a href="/" className="bg-white md:mt-14 mt-10  block px-5 py-3 rounded-sm w-fit font-semibold cursor-pointer">Shop Now</a>
                    </div>
                </div>
                {/* hero right */}

                <div className='flex flex-col justify-between w-full md:w-1/3 rounded-lg '
                    style={setBackgroundImage('/images/hero-right.jpg', { backgroundPosition: 'bottom right', backgroundColor: '#F8BF4E', backgroundSize: 'unset' })}>
                    <div className='md:py-16 md:px-12 py-10 px-6'>
                        <h1 className='text-3xl font-bold leading-10 mb-8'>
                            20% SALE OFF
                        </h1>
                        <div className='text-lg font-bold mb-20'>
                            Synthetic seeds<br />
                            Net 2.0 OZ
                        </div>
                        <a href="/" className="bg-white md:mt-14 mt-10 block px-5 py-3 rounded-sm w-fit font-semibold cursor-pointer">Shop Now</a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Homehero