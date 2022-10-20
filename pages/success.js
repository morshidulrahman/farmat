import React from 'react'
import SuccessContent from '../app/components/order/Successcontent'

function success() {
    return (
        <div className='mx-auto max-w-6xl mt-10'>
            <h1 className='text-4xl font-bold mb-8 text-center '>Success</h1>
            <div className='mt-10'>
                <SuccessContent />
            </div>
        </div>
    )
}

export default success