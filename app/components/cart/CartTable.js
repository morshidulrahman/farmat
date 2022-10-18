import React from 'react'
import CartTableMobile from './CartTableMobile'
import CartTableRow from './CartTableRow'
function CartTable() {
    return (
        <>
            <table className='w-full hidden md:table'>
                <thead className='bg-gray-100 border'>
                    <tr className='text-left'>
                        <th className='py-5'></th>
                        <th className='text-title py-5'>Product</th>
                        <th className='text-title py-5'>Price</th>
                        <th className='text-title py-5'>Quantity</th>
                        <th className='text-title py-5'>Total</th>
                        <th className='text-title py-5'></th>
                    </tr>
                </thead>
                <tbody>
                    <CartTableRow />
                    <CartTableRow />
                </tbody>
            </table>
            <CartTableMobile />
            <CartTableMobile />
        </>
    )
}

export default CartTable