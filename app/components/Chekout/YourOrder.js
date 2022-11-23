import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FormBtn } from '../shared/from'
import { selectItems, selectTotalPrice } from "../../redux/slices/basketSlice"

const YourOrder = ({ placeOrder, loading }) => {
    const cartItems = useSelector(selectItems)
    const Totalprice = useSelector(selectTotalPrice)
    return (
        <div>
            <h3 className="text-2xl mb-4">Your order</h3>
            <div className="bg-gray-100 p-5 rounded-md">
                <div className="flex justify-between pb-5 border-b">
                    <h2 className="text-base font-bold">PRODUCT</h2>
                    <h2 className="text-base font-bold">TOTAL</h2>
                </div>
                <div className="space-y-3 bg-white">
                    {cartItems.map((item, index) => (
                        <div className="flex justify-between py-5 px-5 border-b" key={index}>
                            <h2 className="text-base font-medium">{item.name} <span className="text-gray-400">(x{item.quantity})</span></h2>
                            <h2 className="text-base font-bold ml-2">${(item.price * item.quantity).toFixed(2)}</h2>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-base font-bold">Subtotal</h2>
                    <h2 className="text-base font-bold text-green">${(Totalprice).toFixed(2)}</h2>
                </div>
                <div className="py-5 border-b space-y-3">
                    <span className="text-title">Shipping</span>
                    <ul className="">
                        <li className="">- Flat rate</li>
                    </ul>
                </div>
                <div className="flex justify-between py-5 border-b">
                    <h2 className="text-lg font-bold">Total</h2>
                    <h2 className="text-lg font-bold text-green">${(Totalprice).toFixed(2)}</h2>
                </div>
                <div className="pt-5">
                    <h2 className="text-lg font-bold">Payment method</h2>
                    <p className="text-gray-500 mt-3"> - Pay with a Credit/Debit Card</p>
                </div>
            </div>
            <FormBtn
                title="Place Order"
                onClick={placeOrder}
                loading={loading}
                className="w-full p-4"
            />
        </div>
    )
}

export default YourOrder