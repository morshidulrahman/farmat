import React from 'react'
import Image from "next/image"
import Link from 'next/link'
function ProductCard({ product }) {
    const { name, image, price, weight, oldPrice } = product


    const OffCalc = () => {
        const off = ((oldPrice - price) / oldPrice) * 100
        return Math.round(off)
    }
    return (
        <Link href="/products">
            <div className="product-card ml-4">
                {
                    oldPrice && (
                        <span className='bg-orange px-2  text-white text-sm z-10 absolute top-1 left-1 rounded-md'>
                            {OffCalc()}% Off
                        </span>
                    )
                }
                <Image src={image}
                    width={190}
                    height={190}
                    objectFit="contain"
                />
                <div className="flex flex-col mt-1 w-full ">
                    <h4 className="text-base font-bold capitalize">farmat</h4>
                    <h3 className="truncate text-base font-bold mb-1 text-gray-700">{name}</h3>
                    <span className="text-sm text-green mb-1 font-semibold">{weight}</span>
                    <div className="flex gap-1 items-center">
                        <span className={`text-base font-bold ${oldPrice ? "text-orange" : "text-green"} `}>${price}</span>
                        {
                            oldPrice && (
                                <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard