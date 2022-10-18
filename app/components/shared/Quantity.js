import React from 'react'

const Quantity = () => {
    return (
        <div className="flex border ">
            <button className="w-10 bg-[#F5F5F5] flex items-center justify-center p-1">
                -
            </button>
            <div className="w-20 md:w-10 flex items-center justify-center">1</div>
            <button className="w-10 bg-[#F5F5F5] flex items-center justify-center">
                +
            </button>
        </div>
    )
}

export default Quantity