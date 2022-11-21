import React, { useEffect } from 'react'
import Footer from "./Footer"
import Header from './Header'
import { auth } from '../configs/firebase'
import { updateUser } from '../redux/slices/authSlice'
import { useDispatch } from 'react-redux'

function Layout({ children }) {
    const dispatch = useDispatch()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(updateUser({
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL
                }))
            }
        })
        return unsubscribe
    }, [])
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout