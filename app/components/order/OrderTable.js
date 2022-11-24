import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from '../../redux/slices/basketSlice'
import CartTableMobile from './OrderTableMobile'
import CartTableRow from './OrderTableRow'
import { LoadingOverlay } from '@mantine/core';
import { db } from '../../configs/firebase'

function CartTable() {
    const cartitems = useSelector(selectItems)
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    // get order data form database

    useEffect(() => {
        setLoading(true)
        db.collection('orders').orderBy('created_at', 'desc')
            .get()
            .then((querySnapshot) => {
                const orders = []
                querySnapshot.forEach((doc) => {
                    orders.push(
                        {
                            id: doc.id,
                            ...doc.data(),
                            created_at: doc.data().created_at.toDate().getTime()
                        }
                    )
                })
                setOrders(orders)
            })
            .finally(() => setLoading(false))
    }, [])

    console.log(orders)

    return (
        <>
            <table className='w-full hidden md:table'>
                <thead className='bg-gray-100 border'>
                    <tr className='text-left'>
                        <th className="text-title py-5 pl-3">Order Id</th>
                        <th className="text-title py-5">Products</th>
                        <th className="text-title py-5">Total Price</th>
                        <th className="text-title py-5">Time ago</th>
                        <th className="text-title py-5">Payment</th>
                        <th className="text-title py-5">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, index) => (
                        <CartTableRow key={index} {...item} />
                    ))}
                </tbody>
            </table>
            {orders.map((item, index) => (
                <CartTableMobile key={index} {...item} />
            ))}
        </>
    )
}

export default CartTable