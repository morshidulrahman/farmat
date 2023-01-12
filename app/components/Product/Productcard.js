import React, { useState } from "react";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItems,
  addItem,
  removeItem,
} from "../../redux/slices/basketSlice";
import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs";
import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";
function ProductCard({ product }) {
  const { id, name, image, price, weight, oldPrice } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);

  const OffCalc = () => {
    const off = ((oldPrice - price) / oldPrice) * 100;
    return Math.round(off);
  };

  const checkexits = (id) => {
    const find = cartItems.filter((item) => item.id === id);
    return !!find.length;
  };

  const addtobasket = (product) => {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
  };

  const removeItems = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <Link href={`/products/${id}`}>
      <div className="product-card ml-4">
        {oldPrice && (
          <span className="bg-orange px-2  text-white text-sm z-10 absolute top-1 left-1 rounded-md">
            {OffCalc()}% Off
          </span>
        )}
        <img src={image} />
        <div className="flex flex-col mt-1 w-full ">
          <h4 className="text-base font-bold capitalize">farmat</h4>
          <h3 className="truncate text-base font-bold mb-1 text-gray-700">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-green mb-1 font-semibold">
                {weight}
              </span>
              <div className="flex gap-1 items-center">
                <span
                  className={`text-base font-bold ${
                    oldPrice ? "text-orange" : "text-green"
                  } `}
                >
                  ${price}
                </span>
                {oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {oldPrice}
                  </span>
                )}
              </div>
            </div>
            {checkexits(id) ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  removeItems(id);
                  showNotification({
                    title: "Remove successfully",
                    message: "Cart remove successfully",
                  });
                }}
                className="bg-primary p-2 text-white rounded-full
                            "
              >
                <BsFillCartCheckFill size={17} />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  addtobasket(product);
                  showNotification({
                    title: "Add successfully",
                    message: "Cart add successfully",
                  });
                }}
                className="bg-gray-600 text-white p-2 rounded-full
                            "
              >
                <BsCartPlus size={17} />
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
