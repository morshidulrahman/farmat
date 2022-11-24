import React from 'react'
import { timeAgo } from '../../utils/helper'
import Link from 'next/link'
function CartTableMobile({ order_id, items, total, payment_success, created_at }) {


    return (
        <div className="md:hidden mb-5 border-b pb-5">
            <h3 className="truncate w-4/5">Order ID: {order_id}</h3>
            <p className="text-sm text-gray-500 mb-3">Ordered {timeAgo(created_at)} ago</p>
            {items.map((item, i) => (
                <Link key={i} href={`/products/${item.id}`}>
                    <h3 className="cursor-pointer hover:text-primary text-sm font-bold text-title">
                        {item?.name} <span className="text-sm text-gray-500">({item?.quantity}x)</span>
                    </h3>
                </Link>
            ))}
            <p className="text-sm text-gray-500 mt-3">Payment: {payment_success ? 'success' : 'failed'}</p>
            <p className="text-sm text-gray-500">Status: <span className="text-primary font-semibold">Pending</span></p>
            <p className="text-sm text-gray-500 mt-2">Total: <span className="text-green font-semibold">${total}</span></p>
        </div>
    )
}

export default CartTableMobile