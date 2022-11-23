import React from 'react'
import Breadcrumb from '../components/shared/Breadcrumb'
import Auth from '../components/Auth'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/slices/authSlice'

const Checkoutlayout = ({ children }) => {
    const user = useSelector(selectUser)
    return (
        <main>
            {user ? (
                <>
                    {children}
                </>
            ) : (
                <>
                    <Auth />
                </>
            )
            }
        </main>
    )
}

export default Checkoutlayout