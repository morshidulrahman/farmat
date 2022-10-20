import React from 'react'
import { Loader } from '@mantine/core';
const Button = ({ className, title, loading, ...rest }) => {
    return (
        <button className={`bg-primary font-bold px-6 rounded ${className}`} {...rest}>
            {loading ? (<Loader size="sm" className='mx-auto' color={'green'} />) : title}
        </button>
    )
}

export default Button