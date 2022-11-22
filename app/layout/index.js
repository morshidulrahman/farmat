import React, { useEffect } from 'react'
import Footer from "./Footer"
import Header from './Header'
import { auth } from '../configs/firebase'
import { updateUser } from '../redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { removeUesr } from '../redux/slices/authSlice'
import { selectItems, updateBasket } from '../redux/slices/basketSlice'
function Layout({ children }) {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectItems)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(updateUser({
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL
                }))
            } else {
                dispatch(removeUesr())
            }
        })

        // get cartitems from the loacalstroge

        const local_items = localStorage.getItem("CART_ITEMS") ? JSON.parse(localStorage.getItem("CART_ITEMS")) : []

        dispatch(updateBasket(local_items))

        return unsubscribe
    }, [])

    useEffect(() => {
        if (!cartItems.length) return

        // save the cart items to localstorage

        const items = JSON.stringify(cartItems)
        localStorage.setItem("CART_ITEMS", items)

    }, [cartItems])

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