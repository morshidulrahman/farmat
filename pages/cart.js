import React from 'react'
import Breadcrumb from '../app/components/shared/Breadcrumb'
import Quantity from '../app/components/shared/Quantity'
import { MdDelete } from 'react-icons/md';
import CartTable from '../app/components/cart/CartTable';
import CartAction from '../app/components/cart/CartAction';
import { useSelector } from 'react-redux';
import { selectItems } from '../app/redux/slices/basketSlice';

function Cart() {
    const cartItems = useSelector(selectItems)
    return (
        <main>
            <div className='bg-[#f5f5f5] p-5'>
                <div className=' max-w-6xl mx-auto'>
                    <Breadcrumb />
                </div>
            </div>
            {
                cartItems.length > 0 ? (
                    <div className='mx-auto max-w-6xl mt-10'>
                        <h1 className='text-4xl font-bold mb-8 text-center '>Cart</h1>
                        <div className='mt-10'>
                            <CartTable />
                        </div>
                        <CartAction />
                    </div>
                ) : (
                    <div className='mx-auto max-w-6xl mt-10'>
                        <img
                            src="/images/order/empty-cart.gif" loading="lazy" alt=""
                            className="mx-auto w-1/2 mt-5"
                        />
                        <div className='mt-10'>
                            <h1 className='text-lg font-bold  text-center capitalize mb-10'>Your Cart is empty</h1>
                        </div>
                    </div>
                )
            }
        </main>
    )
}

export default Cart