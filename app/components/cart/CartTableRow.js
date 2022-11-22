import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { increaseItemQuantity, decreaseItemQuantity, removeItem } from '../../redux/slices/basketSlice'
import Quantity from '../shared/Quantity'

function CartTableRow({ id, name, image, price, weight, quantity }) {
    const dispatch = useDispatch()

    const increaseQuantity = () => {
        dispatch(increaseItemQuantity(id))
    }
    const decreaseQuantity = () => {
        dispatch(decreaseItemQuantity(id))
    }

    return (
        <>
            <tr className="border-b md:border-r md:border-l">
                <td className="py-5 pl-3">
                    <img src={image} loading="lazy" alt={name} className="w-20 h-20 object-cover rounded-md" />
                </td>
                <td className="py-5 max-w-[250px]">
                    <div className="">
                        <h1 className="text-lg font-bold text-title">{name}</h1>
                        <p className="text-sm text-gray-500">Weight:{weight}</p>
                    </div>
                </td>
                <td className="py-5">${price}</td>
                <td className="py-5">
                    <div className="w-28">
                        <Quantity
                            quantity={quantity}
                            decreaseQuantity={decreaseQuantity}
                            increaseQuantity={increaseQuantity} />
                    </div>
                </td>
                <td className="py-5">${(price * quantity).toFixed(2)}</td>
                <td className="py-5">
                    <MdDelete className="text-2xl cursor-pointer" onClick={() => dispatch(removeItem(id))} />
                </td>
            </tr>
        </>
    )
}

export default CartTableRow