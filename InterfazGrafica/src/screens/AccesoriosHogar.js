import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Productos } from '../components/Home/Productos'

export const AccesoriosHogar = () => {
    return (
        <div>
            <Header />
            <Productos categoria={2} />
            <Footer />
        </div>
    )
}
