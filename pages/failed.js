import React from 'react'
import FailedContent from '../app/components/order/FailedContent'
function failed() {
    return (
        <div className='mx-auto max-w-6xl mt-10'>
            <h1 className='text-4xl font-bold mb-8 text-center '>Failed</h1>
            <div className='mt-10'>
                <FailedContent />
            </div>
        </div>
    )
}

export default failed