import React from "react";
import { MdDelete } from "react-icons/md";
import Quantity from "../shared/Quantity";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} from "../../redux/slices/basketSlice";
function CartTableMobile({ id, name, image, price, quantity }) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(id));
  };
  const decreaseQuantity = () => {
    dispatch(decreaseItemQuantity(id));
  };

  return (
    <div className="mt-5 md:hidden flex border-b mb-2 pb-4">
      <div>
        <Image
          width={80}
          height={80}
          src={image}
          alt=""
          className="w-20 h-20 object-cover rounded-md"
        />
      </div>
      <div className="flex-grow space-y-1">
        <h1 className="text-lg font-bold text-title">{name}</h1>
        <p className="text-sm text-gray-500">Color: Black</p>
        <p className="text-sm text-gray-500">Size: M</p>
        <p className="text-sm text-gray-500">
          Price: <span className="text-primary font-semibold">${price}</span>
        </p>
        <div className="py-2 w-fit">
          <Quantity
            quantity={quantity}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        </div>
        <p className="text-sm text-gray-500">
          Total Price:{" "}
          <span className="text-green font-semibold">
            ${(price * quantity).toFixed(2)}
          </span>
        </p>
      </div>
      <div className="mt-2">
        <MdDelete
          className="text-2xl cursor-pointer"
          onClick={() => dispatch(removeItem(id))}
        />
      </div>
    </div>
  );
}

export default CartTableMobile;
