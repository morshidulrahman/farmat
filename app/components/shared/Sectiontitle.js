import React from 'react'
import { AiOutlineRight, } from "react-icons/ai"
function Sectiontitle({ title, text, url = "/" }) {
    return (
        <>
            <div className='flex items-center gap-10'>
                <h1 className='text-3xl font-bold capitalize'>{title}</h1>
                <a href={url} className='md:flex items-center gap-2 text-color text-lg hover:text-primary duration-500 ease-in-out hidden capitalize'>{text}<AiOutlineRight /></a>
            </div>
        </>
    )
}

export default Sectiontitle