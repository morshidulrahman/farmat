import React from 'react'
import Bilinginfo from "./Bilinginfo"
import YourOrder from "./YourOrder"
function CheckoutContent() {
    return (
        <div className='flex flex-wrap md:flex-nowrap gap-5'>
            <div className='w-full md:w-[60%]'>
                <Bilinginfo />
            </div>
            <div className='w-full md:w-[40%]'>
                <YourOrder />
            </div>
        </div>
    )
}

export default CheckoutContent