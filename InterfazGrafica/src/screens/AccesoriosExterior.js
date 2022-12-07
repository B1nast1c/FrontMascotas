import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Productos } from '../components/Home/Productos'

export const AccesoriosExterior = () => {
    return (
        <div>
            <Header />
            <Productos categoria={3} />
            <Footer />
        </div>
    )
}
