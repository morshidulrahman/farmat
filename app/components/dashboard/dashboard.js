import React from 'react'
import { selectUser } from '../../redux/slices/authSlice'
import { useSelector } from 'react-redux'
const Dashboard = () => {
    const user = useSelector(selectUser)
    return (
        <div >
            <h1 className="text-center text-2xl font-bold mb-4">Hi {user.name}  Welcome to your Dashboard</h1>
            <img className="rounded-xl w-1/2 mx-auto" loading="lazy" src="/images/dashboard.gif" alt="personal settings" />
        </div>
    )
}

export default Dashboard