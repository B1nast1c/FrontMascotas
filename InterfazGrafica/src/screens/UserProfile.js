import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../components/styles/profile.css'
import Profile from '../components/Userprofile'

const UserProfile = () => {
    return (
        <div>
            <Header />
            <Profile />
            <Footer />
        </div>
    )
}

export default UserProfile