import React from 'react'
import CheckoutContent from '../app/components/Chekout/CheckoutContent'
import Breadcrumb from '../app/components/shared/Breadcrumb'

function Checkout() {
    return (
        <main>
            <div className='bg-[#f5f5f5] p-5'>
                <div className=' max-w-6xl mx-auto'>
                    <Breadcrumb />
                </div>
            </div>
            <div className='mx-auto max-w-6xl mt-10'>
                <h1 className='text-4xl font-bold mb-8 text-center '>Checkout</h1>
                <div className='mt-10'>
                    <CheckoutContent />
                </div>
            </div>
        </main>
    )
}

export default Checkout