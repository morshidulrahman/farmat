import React from 'react'
import Breadcrumb from '../../app/components/shared/Breadcrumb'
import Auth from '../../app/components/Auth'
function Myaccount() {
    return (
        <main>
            <div className='bg-[#f5f5f5] p-5'>
                <div className=' max-w-6xl mx-auto'>
                    <Breadcrumb />
                </div>
            </div>
            <Auth />
        </main>
    )
}

export default Myaccount