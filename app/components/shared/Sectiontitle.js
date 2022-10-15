import React from 'react'
import { AiOutlineRight, } from "react-icons/ai"
function Sectiontitle({ title, text, url = "/", categories }) {
    return (
        <>
            <div className='flex items-center gap-10 justify-between'>
                <h1 className='text-3xl font-bold capitalize'>{title}</h1>
                {
                    categories ? (
                        categories.map((item, index) => (
                            <a href={url} key={index} className="md:flex hidden  gap-5 mt-2 text-gray-500">
                                {item}
                            </a>
                        ))
                    ) : (
                        <a href={url} className='md:flex items-center gap-2 text-color text-lg hover:text-primary duration-500 ease-in-out hidden capitalize mt-2'>{text}<AiOutlineRight /></a>
                    )
                }
            </div>
        </>
    )
}

export default Sectiontitle