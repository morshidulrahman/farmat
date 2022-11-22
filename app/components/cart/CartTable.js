import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from '../../redux/slices/basketSlice'
import CartTableMobile from './CartTableMobile'
import CartTableRow from './CartTableRow'

function CartTable() {
    const cartitems = useSelector(selectItems)
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
                    {cartitems.map((item, index) => (
                        <CartTableRow key={index} {...item} />
                    ))}
                </tbody>
            </table>
            {cartitems.map((item, index) => (
                <CartTableMobile key={index} {...item} />
            ))}
        </>
    )
}

export default CartTable