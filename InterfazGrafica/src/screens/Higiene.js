import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Productos } from '../components/Home/Productos'

export const Higiene = () => {
    return (
        <div>
            <Header />
            <Productos categoria={4} />
            <Footer />
        </div>
    )
}
