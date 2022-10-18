import React from 'react'
import Breadcrumb from '../app/components/shared/Breadcrumb'
import Quantity from '../app/components/shared/Quantity'
import { MdDelete } from 'react-icons/md';
import CartTable from '../app/components/cart/CartTable';
import CartAction from '../app/components/cart/CartAction';
function Cart() {
    return (
        <main>
            <div className='bg-[#f5f5f5] p-5'>
                <div className=' max-w-6xl mx-auto'>
                    <Breadcrumb />
                </div>
            </div>
            <div className='mx-auto max-w-6xl mt-10'>
                <h1 className='text-4xl font-bold mb-8 text-center '>Cart</h1>
                <div className='mt-10'>
                    <CartTable />
                </div>
                <CartAction />
            </div>

        </main>
    )
}

export default Cart